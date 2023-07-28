import type { EmailDto } from './EmailDto';
import type { PhoneWithCountryCode } from './PhoneWithCountryCode';
import type { PhotoDto } from './PhotoDto';
export type UpdateStoreDto = {
    name?: string;
    phone?: PhoneWithCountryCode;
    address?: string;
    email?: EmailDto;
    timezone?: number;
    avatar?: PhotoDto;
    shippingFee?: number;
    shippingFeeAdditional?: number;
    refundPolicy?: string;
    privacyPolicy?: string;
    termsOfService?: string;
    shippingPolicy?: string;
    currencyId?: number;
};
