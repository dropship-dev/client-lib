import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
export type CreatePaymentDto = {
    type: _36_Enums_PaymentType;
    email: EmailDto;
    name: NameDto;
    publishableKey: string;
    secretKey: string;
    companyName: string;
    companyPhone?: string;
    companyAddress?: string;
    isShowCompanyAddress?: boolean;
    merchantId?: string;
};
