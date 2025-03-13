/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_StoreStatus } from './_36_Enums_StoreStatus';
import type { sortTrackingPerformance } from './sortTrackingPerformance';
export type GetTrackingPerformanceDto = {
  startDate?: string;
  endDate?: string;
  cursor?: string;
  limit?: number;
  search?: string;
  status?: Array<_36_Enums_StoreStatus>;
  sort?: sortTrackingPerformance;
};

