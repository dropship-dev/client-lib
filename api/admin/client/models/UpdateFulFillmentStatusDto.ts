/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FulfillmentStatus } from './FulfillmentStatus';

export type UpdateFulFillmentStatusDto = {
  orders: Array<{
    orderItems: Array<{
      tracking?: string;
      fulfillmentStatus: FulfillmentStatus;
      id: string;
    }>;
    id: string;
  }>;
};

