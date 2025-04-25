import type { _36_Enums_CurrencyType } from './_36_Enums_CurrencyType';
export type BulkCreatePingpongAccountDto = {
    email: string;
    currency?: _36_Enums_CurrencyType;
    storeIds: Array<string>;
    isDefault?: boolean;
};
