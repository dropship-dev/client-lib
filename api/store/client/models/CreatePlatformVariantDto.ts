/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_PlatformCostInfo } from './PrismaJson_PlatformCostInfo';
export type CreatePlatformVariantDto = {
  name: NameDto;
  price: number;
  supplierPrice: number;
  photo: PhotoDto;
  SKU: string;
  variantOption: Array<{
    option: string;
    name: string;
  }>;
  cost: PrismaJson_PlatformCostInfo;
};

