/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ESendMailStatus } from './ESendMailStatus';
export type GetListStoreMarketingDto = {
  search?: string;
  rangeDate?: {
    endDate: string;
    startDate: string;
  };
  rangeRevenue?: {
    to: number;
    from: number;
  };
  cursor?: string;
  limit?: number;
  status?: Array<ESendMailStatus>;
};

