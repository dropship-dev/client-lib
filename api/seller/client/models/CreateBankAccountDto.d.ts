import type { _36_Enums_CurrencyType } from './_36_Enums_CurrencyType';
import type { bankInfo } from './bankInfo';
export type CreateBankAccountDto = {
    accountNumber: string;
    accountHolder: string;
    currency: _36_Enums_CurrencyType;
    bank: bankInfo;
    isDefault?: boolean;
};
