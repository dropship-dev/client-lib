import type { DiscountBoostSaleType } from './DiscountBoostSaleType';
export type DiscountBoostSale = Array<{
    quantity?: number;
    value: number;
    productId: number;
    type: DiscountBoostSaleType;
}>;
