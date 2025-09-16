import type { _36_Enums_RequestPayoutStatus } from './_36_Enums_RequestPayoutStatus';
export type ExportPayoutRequestFilterDto = {
    exportedFilename?: string;
    fulfillmentAgencyId: number;
    startDate?: string;
    endDate?: string;
    statuses?: Array<_36_Enums_RequestPayoutStatus>;
};
