/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_PlatformCostInfo } from './PrismaJson_PlatformCostInfo';
export type ApproveRequestSourcingDto = {
  platformProductId?: number;
  platformVariants?: Array<{
    cost: PrismaJson_PlatformCostInfo;
    id: number;
  }>;
  description?: string;
  productId?: number;
};

