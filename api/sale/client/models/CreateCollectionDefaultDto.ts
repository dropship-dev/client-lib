/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CollectionStatus } from './_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from './_36_Enums_CollectionType';
import type { NameDto } from './NameDto';
import type { operatorConditionDefaultCollection } from './operatorConditionDefaultCollection';
import type { PhotoDto } from './PhotoDto';
export type CreateCollectionDefaultDto = {
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
  type?: _36_Enums_CollectionType;
  platformProductIds?: Array<number>;
};

