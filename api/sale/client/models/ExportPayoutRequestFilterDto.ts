/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Exclude_RequestPayoutStatus_REVIEW_ } from './Exclude_RequestPayoutStatus_REVIEW_';
export type ExportPayoutRequestFilterDto = {
  exportedFilename?: string;
  fulfillmentAgencyId: number;
  startDate?: string;
  endDate?: string;
  statuses?: Array<Exclude_RequestPayoutStatus_REVIEW_>;
};

