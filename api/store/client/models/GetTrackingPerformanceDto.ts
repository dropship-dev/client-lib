/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilterStoreStatus } from './FilterStoreStatus';
import type { sortTrackingPerformance } from './sortTrackingPerformance';
export type GetTrackingPerformanceDto = {
  startDate?: string;
  endDate?: string;
  cursor?: string;
  limit?: number;
  search?: string;
  status?: FilterStoreStatus;
  sort?: sortTrackingPerformance;
};

