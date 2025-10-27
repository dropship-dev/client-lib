import type { _36_Enums_GoogleAdWordsTrackingEventType } from './_36_Enums_GoogleAdWordsTrackingEventType';
export type CreateGoogleAdWordsDto = {
    conversionId: string;
    conversionLabel: string;
    productIds: Array<number>;
    trackingEventType: _36_Enums_GoogleAdWordsTrackingEventType;
};
