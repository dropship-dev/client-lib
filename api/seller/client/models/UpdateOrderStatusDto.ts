/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FulfillmentStatus } from './FulfillmentStatus';
import type { StoreType } from './StoreType';

export type UpdateOrderStatusDto = {
  orders: Array<{
    orderItems: Array<{
      type: StoreType;
      carrier?: string;
      tracking?: string;
      fulfillmentStatus?: FulfillmentStatus;
      id: string;
    }>;
    id: string;
  }>;
};

