export type GetTopRevenueStore = Array<{
    AOV: number;
    GMVPerStore: number;
    GMV: number;
    order: number;
    fulfillmentAgencyName: string | null;
    referralCode: string | null;
    name: string;
    id: string;
}>;
