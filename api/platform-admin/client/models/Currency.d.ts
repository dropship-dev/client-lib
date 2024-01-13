/**
 * Model Currency
 */
export type Currency = {
    updatedAt: string;
    createdAt: string;
    isSupported: boolean;
    rateToUSD: number;
    symbol: string;
    name: string;
    id: number;
};
