import type { CollectionStatus } from './CollectionStatus';
export type UpdateCollectionStatusDto = {
    status: CollectionStatus;
    ids: Array<number>;
};
