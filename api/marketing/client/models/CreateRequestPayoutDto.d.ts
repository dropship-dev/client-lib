import type { _36_Enums_PaymentMethodType } from './_36_Enums_PaymentMethodType';
import type { CurrencyCode } from './CurrencyCode';
export type CreateRequestPayoutDto = {
    amount: number;
    currencyCode: CurrencyCode;
    amountConvert: number;
    type: _36_Enums_PaymentMethodType;
    bankId?: string;
    pingPongId?: string;
    notes?: string;
    storeId: string;
};