export interface ExchangeRatesResponse {
    [x: string]: {
        r030: number,
        txt: string,
        rate: number,
        cc: string,
        exchangedate: string
    };
}
