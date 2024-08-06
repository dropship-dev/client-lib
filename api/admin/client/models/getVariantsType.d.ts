import type { ProductVariant } from './ProductVariant';
export type getVariantsType = (ProductVariant & {
    deleted: boolean;
    isStock: boolean;
    Product: {
        platformProductId: number | null;
        name: string;
    };
    type: string;
});
