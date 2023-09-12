export type StoreProductPerformanceResp = {
    id: string;
    name: string;
    primaryDomain: string;
    products: Array<{
        revenue: number;
        photo: string;
        name: string;
        id: string;
    }>;
};
