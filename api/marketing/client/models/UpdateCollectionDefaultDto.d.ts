import type { _36_Enums_CollectionStatus } from './_36_Enums_CollectionStatus';
import type { NameDto } from './NameDto';
import type { operatorConditionDefaultCollection } from './operatorConditionDefaultCollection';
import type { PhotoDto } from './PhotoDto';
export type UpdateCollectionDefaultDto = {
    name?: NameDto;
    photos?: Array<PhotoDto>;
    condition?: operatorConditionDefaultCollection;
    description?: string;
    SEO?: {
        metadata?: string;
        permalink: string;
        collectionTitle: string;
    };
    status?: _36_Enums_CollectionStatus;
    productIds: Array<number>;
};
