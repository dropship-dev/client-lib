export type ProductPerformance = ({
    CR: number;
    totalOrder: number;
    checkout: number;
    addToCart: number;
    viewProduct: number;
    AOV: number;
    revenue: number;
    name: string;
} & ({
    platformProductId: number;
} | {
    productId: number;
}));
