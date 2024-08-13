import type { BoughtTogetherType } from './BoughtTogetherType';
import type { RelatedProductType } from './RelatedProductType';
export type CrossSellDto = {
    type: (BoughtTogetherType | RelatedProductType);
};
