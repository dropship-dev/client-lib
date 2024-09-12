import type { BoostSaleType } from './BoostSaleType';
import type { PrismaJson_DiscountBoostSale } from './PrismaJson_DiscountBoostSale';
import type { ProductVariant } from './ProductVariant';
export type getVariantsType = (ProductVariant & {
    deleted: boolean;
    isStock: boolean;
    Product?: {
        boostSale: {
            discount?: PrismaJson_DiscountBoostSale | null;
            id?: (number | string);
            status?: boolean;
            type?: BoostSaleType | null;
        };
        platformProductId: number | null;
        name: string;
    };
    type: string;
});
