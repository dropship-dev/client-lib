import type { Exclude_RequestSourcingStatus_SELLER_REJECTED_or_SELLER_ACCEPTED_ } from './Exclude_RequestSourcingStatus_SELLER_REJECTED_or_SELLER_ACCEPTED_';
export type ExportProductRequestFilterDto = {
    exportedFilename?: string;
    fulfillmentAgencyId: number;
    startDate?: string;
    endDate?: string;
    statuses?: Array<Exclude_RequestSourcingStatus_SELLER_REJECTED_or_SELLER_ACCEPTED_>;
};
