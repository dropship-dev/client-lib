import type { UpdateDiscountDto } from './UpdateDiscountDto';
export type UpdateCampaignDto = {
    id?: string;
    label?: string;
    startDate?: string;
    endDate?: string | null;
    status?: boolean;
    discountDto?: Array<UpdateDiscountDto>;
};
