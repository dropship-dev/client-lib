import type { CurrencyCode } from './CurrencyCode';
export type CreateCurrencyDto = {
    name: CurrencyCode;
    symbol: string;
    rateToUSD: number;
};
