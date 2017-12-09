import * as request from "request-promise";
import { table as cryptoLookupTable } from "../util/symbolLookup";

const baseUrl = "https://api.coinmarketcap.com/v1/ticker/";

function cryptoRegexBuilder(): RegExp {
    const str = "^(" + Object.keys(cryptoLookupTable).join("|").replace(/\-/gi, "\\-") + ")";
    // console.log(str);
    return new RegExp(str, "i");
}

class CryptoPrice {
    public registerListener(robot: any) {
        const re = cryptoRegexBuilder();

        return robot.hear(re, async (res: any) => {
            const word = res.match[0].trim().toLowerCase();
            const coinName = cryptoLookupTable[word];

            if (!coinName) { return; }

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
                const priceBTC: string = data[0].price_btc;
                const symbol: string = data[0].symbol;

                if (!priceUSD) {
                    throw new Error("No price in response from " + endpoint);
                }

                let message = `1 ${symbol} = ${priceUSD} USD = ${priceBTC} BTC`;

                if (res.message.text.indexOf("-l") !== -1) {
                    const d = data[0];
                    message = `\`\`\`
${d.name} (${d.symbol})
${d.price_usd} USD
${d.price_btc} BTC
last   1hr ${d.percent_change_1h}%
     24hrs ${d.percent_change_24h}%
      week ${d.percent_change_7d}%
\`\`\``;
                }

                res.send(message);
            } catch (err) {
                //  tslint:disable-next-line:no-console
                console.error(err);
            }
        });
    }
}

export = new CryptoPrice().registerListener;
