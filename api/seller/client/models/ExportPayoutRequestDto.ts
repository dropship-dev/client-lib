/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_RequestPayoutStatus } from './_36_Enums_RequestPayoutStatus';
export type ExportPayoutRequestDto = {
  exportedFilename?: string;
  fulfillmentAgencyId: number;
  startDate?: string;
  endDate?: string;
  statuses?: Array<_36_Enums_RequestPayoutStatus>;
};

