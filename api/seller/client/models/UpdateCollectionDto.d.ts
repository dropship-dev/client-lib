import type { CollectionStatus } from './CollectionStatus';
import type { CombineOperator } from './CombineOperator';
import type { ConditionOperation } from './ConditionOperation';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
export type UpdateCollectionDto = {
    name: NameDto;
    photos?: Array<PhotoDto>;
    condition?: {
        combineOperator: CombineOperator;
        conditionOperator: Array<ConditionOperation>;
    };
    description?: string;
    SEO?: {
        metadata?: string;
        permalink: string;
        collectionTitle: string;
    };
    status: CollectionStatus;
    productIds: Array<string>;
};
