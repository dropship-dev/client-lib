import type { bankInfo } from './bankInfo';
import type { CurrencyType } from './CurrencyType';
export type CreateBankAccountDto = {
    accountNumber: string;
    accountHolder: string;
    currency: CurrencyType;
    bank: bankInfo;
    isDefault?: boolean;
};
