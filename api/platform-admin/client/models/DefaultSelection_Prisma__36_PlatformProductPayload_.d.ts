import type { PrismaJson_AvailableSet } from './PrismaJson_AvailableSet';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
export type DefaultSelection_Prisma__36_PlatformProductPayload_ = {
    collectionDefaultId: number;
    isInSyncWithFulfillmentPlatform: boolean;
    fulfillmentPlatform: DefaultSelection_Prisma__36_PlatformProductPayload_.fulfillmentPlatform;
    fulfillmentPlatformQuoteId: string;
    isEnable: boolean;
    supplierContact: string;
    variantOption: PrismaJson_VariantOptions;
    availableSet: PrismaJson_AvailableSet;
    SKU: string;
    details: string;
    deleted: boolean;
    description: string;
    isActive: boolean;
    photos: PrismaJson_Photos;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
};
export declare namespace DefaultSelection_Prisma__36_PlatformProductPayload_ {
    enum fulfillmentPlatform {
        BETTA_SUP = "BETTA_SUP"
    }
}
