import type { DiscountBoostSaleType } from './DiscountBoostSaleType';
export type DiscountBoostSale = Array<{
    value: number;
    productId: number;
    type: DiscountBoostSaleType;
}>;