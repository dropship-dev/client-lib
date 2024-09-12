import type { BoughtTogetherType } from './BoughtTogetherType';
import type { DiscountForQuantityType } from './DiscountForQuantityType';
import type { RelatedProductType } from './RelatedProductType';
export type BoostSaleDto = {
    type: (BoughtTogetherType | RelatedProductType | DiscountForQuantityType);
};
