import type { CurrencyType } from './CurrencyType';
export type CreatePingPongAccountDto = {
    email: string;
    currency: CurrencyType;
    isDefault?: boolean;
};
