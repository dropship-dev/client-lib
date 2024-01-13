export type StoreProductPerformanceResp = {
    id: string;
    name: string;
    primaryDomain: string;
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
