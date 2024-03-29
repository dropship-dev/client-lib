/**
 * Model Currency
 */
export type Currency = {
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number | null;
    isSupported: boolean;
    rateToUSD: number;
    symbol: string;
    name: string;
    id: number;
};
