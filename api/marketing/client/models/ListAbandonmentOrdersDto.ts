/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderTrackingEmailStatusDto } from './OrderTrackingEmailStatusDto';
import type { OrderTrackingRecoveredStatusDto } from './OrderTrackingRecoveredStatusDto';
export type ListAbandonmentOrdersDto = {
  nextPageIndex?: number;
  pageSize?: number;
  emailStatus?: Array<OrderTrackingEmailStatusDto>;
  recoveryStatus?: Array<OrderTrackingRecoveredStatusDto>;
  id?: string;
  startDate?: string;
  endDate?: string;
};

