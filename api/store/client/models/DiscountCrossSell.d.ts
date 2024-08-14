import type { DiscountCrossSellType } from './DiscountCrossSellType';
export type DiscountCrossSell = Array<{
    value: number;
    productId: number;
    type: DiscountCrossSellType;
}>;
