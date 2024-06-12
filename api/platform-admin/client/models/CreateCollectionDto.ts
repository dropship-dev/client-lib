/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionStatus } from './CollectionStatus';
import type { CollectionType } from './CollectionType';
import type { CombineOperator } from './CombineOperator';
import type { ConditionOperation } from './ConditionOperation';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';

export type CreateCollectionDto = {
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
  type: CollectionType;
};

