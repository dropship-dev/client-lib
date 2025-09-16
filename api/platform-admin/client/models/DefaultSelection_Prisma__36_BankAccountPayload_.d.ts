import type { _36_Enums_CurrencyType } from './_36_Enums_CurrencyType';
import type { PrismaJson_bankInfo } from './PrismaJson_bankInfo';
export type DefaultSelection_Prisma__36_BankAccountPayload_ = {
    walletId: string;
    isBlock: boolean;
    isDefault: boolean;
    bank: PrismaJson_bankInfo;
    accountHolder: string;
    accountNumber: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    id: string;
    currency: _36_Enums_CurrencyType;
};
