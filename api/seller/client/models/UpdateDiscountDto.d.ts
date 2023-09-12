import type { PrismaJson_ProductDiscountItems } from './PrismaJson_ProductDiscountItems';
import type { PrismaJson_ProductRequirementItems } from './PrismaJson_ProductRequirementItems';
export type UpdateDiscountDto = {
    idDiscount: string;
    label: string;
    typeDiscount: PrismaJson_ProductDiscountItems;
    requirementDiscount: PrismaJson_ProductRequirementItems;
};
