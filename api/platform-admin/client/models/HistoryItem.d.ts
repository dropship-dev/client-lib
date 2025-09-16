import type { _36_Enums_HistoryTrackingType } from './_36_Enums_HistoryTrackingType';
import type { PrismaJson_HistoryTrackingDetail } from './PrismaJson_HistoryTrackingDetail';
export type HistoryItem = {
    createdAt: string;
    detail: PrismaJson_HistoryTrackingDetail;
    type: _36_Enums_HistoryTrackingType;
};
