/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderInformationFraudType } from './OrderInformationFraudType';

export type EventFraudType = {
  event: string;
  idempotencyKey: string;
  items: Array<OrderInformationFraudType>;
  groupId: string;
  createdAt: string;
};

