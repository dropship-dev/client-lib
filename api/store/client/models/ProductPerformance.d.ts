export type ProductPerformance = {
    photo: string;
    noOrders: number;
    checkout: number;
    addToCart: number;
    viewProduct: number;
    platformProductId?: number;
    productId?: number;
    CR: number;
    AOI: number;
    AOV: number;
    revenue: number;
    name: string;
    photos: Array<string>;
};
