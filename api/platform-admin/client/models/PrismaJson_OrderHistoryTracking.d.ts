import type { HistoryTrackingType } from './HistoryTrackingType';
export type PrismaJson_OrderHistoryTracking = Array<{
    createAt: string;
    detail: ({
        file: string;
        value: string;
    } | {
        quantity: number;
        productVariant?: string;
        productName: string;
        value: string;
    } | string);
    type: HistoryTrackingType;
}>;
