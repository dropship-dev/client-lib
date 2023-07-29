/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';

export type UpdateProductDto = {
  name?: NameDto;
  description?: string;
  details?: string;
  photos?: Array<PhotoDto>;
  shippingFee?: number;
  shippingFeeAdditional?: number;
  SKU?: string;
  permalink?: string;
  tags?: Array<string>;
};

