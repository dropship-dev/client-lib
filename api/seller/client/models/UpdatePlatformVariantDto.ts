/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';

export type UpdatePlatformVariantDto = {
  name?: NameDto;
  price?: number;
  supplierPrice?: number;
  photo?: PhotoDto;
};

