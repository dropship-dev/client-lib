import type { _36_Enums_CollectionStatus } from './_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from './_36_Enums_CollectionType';
import type { NameDto } from './NameDto';
import type { operatorCondition } from './operatorCondition';
import type { PhotoDto } from './PhotoDto';
export type CreateCollectionDto = {
    name?: NameDto;
    photos?: Array<PhotoDto>;
    condition?: operatorCondition;
    description?: string;
    SEO?: {
        metadata?: string;
        permalink: string;
        collectionTitle: string;
    };
    status?: _36_Enums_CollectionStatus;
    type?: _36_Enums_CollectionType;
    productIds?: Array<number>;
};
