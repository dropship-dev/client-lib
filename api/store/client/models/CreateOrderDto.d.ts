import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
import type { PaymentType } from './PaymentType';
import type { PhoneWithCountryCode } from './PhoneWithCountryCode';
export type CreateOrderDto = {
    name?: NameDto;
    email?: EmailDto;
    phone?: PhoneWithCountryCode;
    address1?: string;
    address2?: string;
    city?: string;
    province?: string;
    zipCode?: string;
    country?: string;
    note?: string;
    payment: PaymentType;
    orderItems: Array<{
        quantity: number;
        productVariantId: number;
    }>;
};
