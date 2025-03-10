/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CollectionStatus } from './_36_Enums_CollectionStatus';
import type { NameDto } from './NameDto';
import type { operatorCondition } from './operatorCondition';
import type { PhotoDto } from './PhotoDto';
export type UpdateCollectionDto = {
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
  productIds: Array<number>;
};

