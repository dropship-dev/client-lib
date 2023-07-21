import type { EmailDto } from './EmailDto';
import type { PaymentType } from './PaymentType';
export type CreatePaymentDto = {
    type: PaymentType;
    email: EmailDto;
    publishableKey: string;
    secretKey: string;
};
