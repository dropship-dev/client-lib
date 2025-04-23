import type { DiscountBoostSaleType } from './DiscountBoostSaleType';
export type SuggestionResponseDto = {
    quantity?: number;
    value: number;
    productId: number;
    type: DiscountBoostSaleType;
    id?: number;
    ProductVariant?: Array<{
        name: string;
        id: number;
    }>;
};
