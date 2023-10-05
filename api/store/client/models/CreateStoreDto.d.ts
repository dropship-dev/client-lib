import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
import type { PhoneWithCountryCode } from './PhoneWithCountryCode';
export type CreateStoreDto = {
    name: NameDto;
    email: EmailDto;
    emailFulfillmentAgency: EmailDto;
    phone?: PhoneWithCountryCode;
    address?: string;
};
