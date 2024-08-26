import type { ProductVariant } from './ProductVariant';
export type getVariantsType = (ProductVariant & {
    deleted: boolean;
    isStock: boolean;
    Product?: {
        CrossSell: {
            id?: (number | string);
            status?: boolean;
        };
        platformProductId: number | null;
        name: string;
    };
    type: string;
});
