import type { CurrencyType } from './CurrencyType';
/**
 * Model PingPongAccount
 */
export type PingPongAccount = {
    updatedAt: string;
    createdAt: string;
    walletId: string | null;
    isDeleted: boolean;
    isBlock: boolean;
    isDefault: boolean;
    currency: CurrencyType;
    email: string;
    id: string;
};
