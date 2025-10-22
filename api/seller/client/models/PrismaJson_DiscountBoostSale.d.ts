import type { DiscountBoostSaleType } from './DiscountBoostSaleType';
export type PrismaJson_DiscountBoostSale = Array<{
    quantity?: number;
    value: number;
    productId: number;
    type: DiscountBoostSaleType;
    isToShowCompareAtPrice?: boolean;
    highlightBadge?: 'Most Popular' | 'Most Value' | 'Best Choice' | 'Recommended';
    offerLabel?: string;
    subtitle?: string;
    title?: string;
    index?: number;
}>;
