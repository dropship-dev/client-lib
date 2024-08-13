export type StoreProductPerformanceResp = {
    id: string;
    name: string;
    primaryDomain: string;
    revenue: number;
    storeProfit: number;
    products: Array<{
        link: string;
        fulfillCost: number;
        storeProfit: number;
        revenue: number;
        photo: string;
        name: string;
        id: string;
    }>;
};
