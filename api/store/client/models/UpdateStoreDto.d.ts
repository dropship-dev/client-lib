import type { EmailDto } from './EmailDto';
import type { PhoneWithCountryCode } from './PhoneWithCountryCode';
export type UpdateStoreDto = {
    name?: string;
    phone?: PhoneWithCountryCode;
    address?: string;
    email?: EmailDto;
    timezone?: number;
    refundPolicy?: string;
    privacyPolicy?: string;
    termsOfService?: string;
    shippingPolicy?: string;
    currencyId?: number;
};
