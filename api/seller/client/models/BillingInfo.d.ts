import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
import type { PhoneWithCountryCode } from './PhoneWithCountryCode';
export type BillingInfo = {
    country?: string;
    zipCode?: string;
    province?: string | null;
    city?: string | null;
    address2?: string | null;
    address1?: string | null;
    phone?: PhoneWithCountryCode | null;
    name?: NameDto | null;
    email?: EmailDto | null;
};
