/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_AvailableSet } from './PrismaJson_AvailableSet';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
export type DefaultSelection_Prisma__36_PlatformProductPayload_ = {
  collectionDefaultId: number;
  priceUpdatedAt: string;
  isInSyncWithFulfillmentPlatform: boolean;
  fulfillmentPlatformSupplierId: number;
  fulfillmentPlatform: DefaultSelection_Prisma__36_PlatformProductPayload_.fulfillmentPlatform;
  fulfillmentPlatformQuoteId: string;
  isEnable: boolean;
  supplierContact: string;
  variantOption: PrismaJson_VariantOptions;
  availableSet: PrismaJson_AvailableSet;
  SKU: string;
  details: string;
  deleted: boolean;
  photos: PrismaJson_Photos;
  description: string;
  isActive: boolean;
  name: string;
  updatedAt: string;
  createdAt: string;
  fulfillmentAgencyId: number;
  id: number;
};
export namespace DefaultSelection_Prisma__36_PlatformProductPayload_ {
  export enum fulfillmentPlatform {
    BETTA_SUP = 'BETTA_SUP',
  }
}

