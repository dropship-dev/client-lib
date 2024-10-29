/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StoreEmailLogStatus } from './StoreEmailLogStatus';

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
  status?: Array<StoreEmailLogStatus>;
};

