import type { SettingRequestDay } from './SettingRequestDay';
export type SettingPayoutRequestDto = {
    receiverRequestTime: Array<string>;
    receiverRequestDay: Array<SettingRequestDay>;
};
