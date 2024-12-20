export type StoreProductPerformanceResp = {
    products: Array<{
        link: string;
        fulfillCost: number;
        storeProfit: number;
        revenue: number;
        photo: string;
        name: string;
        id: string;
    }>;
    storeProfit: number;
    revenue: number;
    primaryDomain: string;
    name: string;
    id: string;
};
