import type { _36_Enums_CurrencyType } from './_36_Enums_CurrencyType';
import type { OtpType } from './OtpType';
export type VerifyOtpAddPingpongAccountDto = {
    email: string;
    type: OtpType;
    otp: string;
    storeId: string;
    currency?: _36_Enums_CurrencyType;
    isDefault?: boolean;
};
