import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
export type UpdatePaymentDto = {
    name?: NameDto;
    companyName?: string;
    email?: EmailDto;
    companyPhone?: string;
    companyAddress?: string;
    isShowCompanyAddress?: boolean;
};