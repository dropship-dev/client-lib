/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_AsyncTaskStatus } from '../models/_36_Enums_AsyncTaskStatus';
import type { _36_Enums_AsyncTaskType } from '../models/_36_Enums_AsyncTaskType';
import type { _36_Enums_FulfillmentStatus } from '../models/_36_Enums_FulfillmentStatus';
import type { _36_Enums_OrderDisputeStatus } from '../models/_36_Enums_OrderDisputeStatus';
import type { _36_Enums_RequestPayoutStatus } from '../models/_36_Enums_RequestPayoutStatus';
import type { _36_Enums_TransactionStatus } from '../models/_36_Enums_TransactionStatus';
import type { AsyncTask } from '../models/AsyncTask';
import type { Exclude_RequestSourcingStatus_SELLER_REJECTED_or_SELLER_ACCEPTED_ } from '../models/Exclude_RequestSourcingStatus_SELLER_REJECTED_or_SELLER_ACCEPTED_';
import type { PrismaJson_AsyncTaskResult } from '../models/PrismaJson_AsyncTaskResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AsyncTaskService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createExportOrderTask({
    exportedFilename,
    fulfillmentAgencyId,
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
    exportedFilename: string,
    fulfillmentAgencyId?: number,
    storeId?: string,
    paymentStatus?: Array<_36_Enums_TransactionStatus>,
    fulfillmentStatus?: Array<_36_Enums_FulfillmentStatus>,
    search?: string,
    productName?: string,
    startDate?: string,
    endDate?: string,
    startTotal?: number,
    endTotal?: number,
    gateway?: Array<number>,
    disputeStatus?: Array<_36_Enums_OrderDisputeStatus>,
    latestStat?: boolean,
  }): CancelablePromise<{
    input: any;
    type: _36_Enums_AsyncTaskType;
    status: _36_Enums_AsyncTaskStatus;
    updatedAt: string;
    createdAt: string;
    id: string;
    result: PrismaJson_AsyncTaskResult;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/async-task/export-order',
      query: {
        'exportedFilename': exportedFilename,
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns any Ok
   * @throws ApiError
   */
  public createExportPayoutRequestTask({
    fulfillmentAgencyId,
    exportedFilename,
    startDate,
    endDate,
    statuses,
  }: {
    fulfillmentAgencyId: number,
    exportedFilename?: string,
    startDate?: string,
    endDate?: string,
    statuses?: Array<_36_Enums_RequestPayoutStatus>,
  }): CancelablePromise<{
    input: any;
    type: _36_Enums_AsyncTaskType;
    status: _36_Enums_AsyncTaskStatus;
    updatedAt: string;
    createdAt: string;
    id: string;
    result: PrismaJson_AsyncTaskResult;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/async-task/export-payout-request',
      query: {
        'exportedFilename': exportedFilename,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'startDate': startDate,
        'endDate': endDate,
        'statuses': statuses,
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
   * @returns any Ok
   * @throws ApiError
   */
  public createExportProductRequestTask({
    fulfillmentAgencyId,
    exportedFilename,
    startDate,
    endDate,
    statuses,
  }: {
    fulfillmentAgencyId: number,
    exportedFilename?: string,
    startDate?: string,
    endDate?: string,
    statuses?: Array<Exclude_RequestSourcingStatus_SELLER_REJECTED_or_SELLER_ACCEPTED_>,
  }): CancelablePromise<{
    input: any;
    type: _36_Enums_AsyncTaskType;
    status: _36_Enums_AsyncTaskStatus;
    updatedAt: string;
    createdAt: string;
    id: string;
    result: PrismaJson_AsyncTaskResult;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/async-task/export-product-request',
      query: {
        'exportedFilename': exportedFilename,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'startDate': startDate,
        'endDate': endDate,
        'statuses': statuses,
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
   * @returns any Ok
   * @throws ApiError
   */
  public createExportAccountancyTask({
    exportedFilename,
    fulfillmentAgencyId,
    startDate,
    endDate,
    storeId,
  }: {
    exportedFilename: string,
    fulfillmentAgencyId: number,
    startDate?: string,
    endDate?: string,
    storeId?: string,
  }): CancelablePromise<{
    input: any;
    type: _36_Enums_AsyncTaskType;
    status: _36_Enums_AsyncTaskStatus;
    updatedAt: string;
    createdAt: string;
    id: string;
    result: PrismaJson_AsyncTaskResult;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/async-task/export-accountancy',
      query: {
        'exportedFilename': exportedFilename,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'startDate': startDate,
        'endDate': endDate,
        'storeId': storeId,
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
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createExportStoreReportTask({
    exportedFilename,
    fulfillmentAgencyId,
    search,
    startDate,
    endDate,
  }: {
    exportedFilename: string,
    fulfillmentAgencyId?: number,
    search?: string,
    startDate?: string,
    endDate?: string,
  }): CancelablePromise<{
    input: any;
    type: _36_Enums_AsyncTaskType;
    status: _36_Enums_AsyncTaskStatus;
    updatedAt: string;
    createdAt: string;
    id: string;
    result: PrismaJson_AsyncTaskResult;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/async-task/export-store-report',
      query: {
        'exportedFilename': exportedFilename,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
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
