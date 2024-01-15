/**
 * Model Currency
 */
export type Currency = {
    fulfillmentAgencyId: number | null;
    updatedAt: string;
    createdAt: string;
    isSupported: boolean;
    rateToUSD: number;
    symbol: string;
    name: string;
    id: number;
};
