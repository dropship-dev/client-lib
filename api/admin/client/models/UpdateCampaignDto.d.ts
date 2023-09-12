import type { UpdateDiscountDto } from './UpdateDiscountDto';
export type UpdateCampaignDto = {
    id?: string;
    label?: string;
    startDate?: string;
    duaration?: string;
    status?: boolean;
    discountDto?: Array<UpdateDiscountDto>;
};
