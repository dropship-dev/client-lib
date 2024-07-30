import type { ProductVariant } from './ProductVariant';
export type getVariantsType = (ProductVariant & {
    deleted: boolean;
    isStock: boolean;
    Product: {
        name: string;
    };
    type: string;
});
