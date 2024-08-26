import type { BoughtTogetherType } from './BoughtTogetherType';
import type { RelatedProductType } from './RelatedProductType';
export type BoostSaleDto = {
    type: (BoughtTogetherType | RelatedProductType);
};
