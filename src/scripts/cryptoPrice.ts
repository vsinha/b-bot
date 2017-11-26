import * as request from "request-promise";
import { cryptoRegexBuilder, table as cryptoLookupTable } from "../util/symbolLookup";
import { commas } from "../util/formatting";

const baseUrl = "https://api.coinmarketcap.com/v1/ticker/";

class CryptoPrice {
    public registerListener(robot: any) {
        const re = cryptoRegexBuilder();

        return robot.hear(re, async (res: any) => {
            const word = res.match[0];
            const coinName = cryptoLookupTable[word];

            if (!coinName) {
                return;
            }

            const endpoint = baseUrl + coinName;

            try {
                const data = await request({
                    uri: endpoint,
                    json: true,
                });

                if (!data[0]) {
                    throw new Error("No coin in response from " + endpoint);
                }

                const priceUSD: string = data[0].price_usd;
                const symbol: string = data[0].symbol;

                if (!priceUSD) {
                    throw new Error("No price in response from " + endpoint);
                }

                const message = `1 ${symbol} = ${priceUSD} USD`;

                res.send(message);
            } catch (err) {
                console.error(err);
            }
        });
    }
}

export = new CryptoPrice().registerListener;
