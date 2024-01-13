/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AsyncTask } from '../models/AsyncTask';
import type { FulfillmentStatus } from '../models/FulfillmentStatus';
import type { OrderDisputeStatus } from '../models/OrderDisputeStatus';
import type { TransactionStatus } from '../models/TransactionStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AsyncTaskService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns AsyncTask Ok
   * @throws ApiError
   */
  public createExportOrderTask({
    fulfillmentAgencyId,
    exportedFilename,
    storeId,
    paymentStatus,
    fulfillmentStatus,
    search,
    productName,
    startDate,
    endDate,
    startTotal,
    endTotal,
    gateway,
    disputeStatus,
    latestStat = false,
  }: {
    fulfillmentAgencyId: number,
    exportedFilename: string,
    storeId?: string,
    paymentStatus?: Array<TransactionStatus>,
    fulfillmentStatus?: Array<FulfillmentStatus>,
    search?: string,
    productName?: string,
    startDate?: string,
    endDate?: string,
    startTotal?: number,
    endTotal?: number,
    gateway?: Array<number>,
    disputeStatus?: Array<OrderDisputeStatus>,
    latestStat?: boolean,
  }): CancelablePromise<AsyncTask> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/async-task/export-order',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'exportedFilename': exportedFilename,
        'storeId': storeId,
        'paymentStatus': paymentStatus,
        'fulfillmentStatus': fulfillmentStatus,
        'search': search,
        'productName': productName,
        'startDate': startDate,
        'endDate': endDate,
        'startTotal': startTotal,
        'endTotal': endTotal,
        'gateway': gateway,
        'disputeStatus': disputeStatus,
        'latestStat': latestStat,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }

  /**
   * @returns AsyncTask Ok
   * @throws ApiError
   */
  public getAsyncTask({
    id,
  }: {
    id: string,
  }): CancelablePromise<AsyncTask> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/async-task/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }

}
