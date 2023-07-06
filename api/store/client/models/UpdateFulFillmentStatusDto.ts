/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FulfillmentStatus } from './FulfillmentStatus';

export type UpdateFulFillmentStatusDto = {
  orders: Array<{
    orderItems: Array<{
      tracking?: string;
      fulfillmentStatus: FulfillmentStatus;
      id: number;
    }>;
    id: string;
  }>;
};

