import type { CampaignDto } from './CampaignDto';
import type { DiscountDto } from './DiscountDto';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
export type UpdateProductDto = {
    name?: NameDto;
    description?: string;
    details?: string;
    photos?: Array<PhotoDto>;
    shippingFee?: number;
    shippingFeeAdditional?: number;
    SKU?: string;
    permalink?: string;
    tags?: Array<string>;
    campaign?: CampaignDto;
    discount?: Array<DiscountDto>;
};
