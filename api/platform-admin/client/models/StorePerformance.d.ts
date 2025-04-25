export type StorePerformance = {
    products: Array<{
        CR: number;
        checkedOut: number;
        addedToCart: number;
        viewed: number;
        photo: string;
        name: string;
        id: string;
    }>;
    CR: number;
    AOV: number;
    checkedOut: number;
    addedToCart: number;
    viewed: number;
    noOrders: number;
    revenue: number;
    name: string;
    id: string;
};
