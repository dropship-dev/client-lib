import type { PrismaJson_ProductDiscountItems } from './PrismaJson_ProductDiscountItems';
import type { PrismaJson_ProductRequirementItems } from './PrismaJson_ProductRequirementItems';
/**
 * Model Discount
 */
export type Discount = {
    campaignId: string | null;
    updatedAt: string;
    createdAt: string;
    userUpdated: string | null;
    userCreated: string | null;
    /**
     * [ProductRequirementItems]
     */
    requirementDiscount: PrismaJson_ProductRequirementItems;
    /**
     * [ProductDiscountItems]
     */
    typeDiscount: PrismaJson_ProductDiscountItems;
    label: string;
    id: string;
};
