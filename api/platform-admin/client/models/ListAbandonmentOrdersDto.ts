/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderTrackingEmailStatus } from './OrderTrackingEmailStatus';
import type { OrderTrackingRecoveredStatus } from './OrderTrackingRecoveredStatus';

export type ListAbandonmentOrdersDto = {
  nextPageIndex?: number;
  pageSize: number;
  emailStatus?: OrderTrackingEmailStatus;
  recoveryStatus?: OrderTrackingRecoveredStatus;
  id?: number;
  startDate?: string;
  endDate?: string;
};

