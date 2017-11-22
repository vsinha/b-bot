import * as request from "request-promise";

const endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";

function commas(x: number | string): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class BTCPrice {

    public registerListener(robot: any) {
        return robot.hear(/btc|bitcoin|batcoin/i, async (res: any) => {
            try {
                const data = await request({
                    uri: endpoint,
                    json: true,
                });

                const priceUSD: number = data.bpi.USD.rate_float;

                if (!priceUSD) {
                    throw new Error("No price in response from " + endpoint);
                }

                const message = `1 BTC = ${commas(priceUSD.toFixed(2))} USD`;

                res.send(message);
            } catch (err) {
                console.error(err);
            }
        });
    }
}

export = new BTCPrice().registerListener;
