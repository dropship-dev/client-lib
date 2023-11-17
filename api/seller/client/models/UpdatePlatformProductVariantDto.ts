/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_PlatformCostInfo } from './PrismaJson_PlatformCostInfo';

export type UpdatePlatformProductVariantDto = {
  id: number;
  name?: NameDto;
  photo?: PhotoDto;
  price?: number;
  supplierPrice?: number;
  cost?: PrismaJson_PlatformCostInfo;
};

