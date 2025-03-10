/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_PlatformCostInfo } from './PrismaJson_PlatformCostInfo';
export type AddPlatformProductStoresDto = {
  storeIds: Array<string>;
  platformProductIds?: Array<number>;
  platformProducts?: Array<{
    variants: Array<{
      cost: PrismaJson_PlatformCostInfo;
      id: number;
    }>;
    id: number;
  }>;
};

