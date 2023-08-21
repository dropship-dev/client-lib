/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';

export type CreateCollectionDto = {
  name: NameDto;
  photo: PhotoDto;
  condition: {
    value: string;
    operator: string;
    field: string;
  };
  description?: string;
  storeId: string;
};

