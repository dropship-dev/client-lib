import type { OtpType } from './OtpType';
export type SendOtpAddPingpongAccountDto = {
    email: string;
    type: OtpType;
    storeId: string;
};
