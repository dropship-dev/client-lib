/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddPlatformProductStoresDto } from '../models/AddPlatformProductStoresDto';
import type { PaymentType } from '../models/PaymentType';
import type { Prisma_SortOrder } from '../models/Prisma_SortOrder';
import type { Store } from '../models/Store';
import type { StoreOrderBy } from '../models/StoreOrderBy';
import type { StoreRevenue } from '../models/StoreRevenue';
import type { StoreStatus } from '../models/StoreStatus';
import type { Theme } from '../models/Theme';
import type { UpdateStorePaymentMethodDto } from '../models/UpdateStorePaymentMethodDto';
import type { UpdateStoreStatusDto } from '../models/UpdateStoreStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StoreService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllStores({
    pageSize = 20,
    status,
    orderBy,
    order,
    periodFrom = '2023-01-01T00:00:00.000Z',
    periodTo,
    nextPageIndex,
    name,
    userId,
    revenueFrom,
    revenueTo,
  }: {
    /**
     * number of stores to return
     */
    pageSize?: number,
    status?: Array<StoreStatus>,
    orderBy?: StoreOrderBy,
    order?: Prisma_SortOrder,
    periodFrom?: string,
    periodTo?: string,
    /**
     * last store id of previous page. Set to 0 to get first page
     */
    nextPageIndex?: any,
    /**
     * filter by store name
     */
    name?: string,
    /**
     * filter by user id. This param is only available for admin
     */
    userId?: string,
    revenueFrom?: number,
    revenueTo?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: (string | number);
    prePageIndex: (string | number);
    total: number;
    data: Array<StoreRevenue>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store',
      query: {
        'pageSize': pageSize,
        'status': status,
        'orderBy': orderBy,
        'order': order,
        'periodFrom': periodFrom,
        'periodTo': periodTo,
        'nextPageIndex': nextPageIndex,
        'name': name,
        'userId': userId,
        'revenueFrom': revenueFrom,
        'revenueTo': revenueTo,
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
   * @returns string Ok
   * @throws ApiError
   */
  public addProductToStores({
    requestBody,
  }: {
    requestBody: AddPlatformProductStoresDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/product',
      body: requestBody,
      mediaType: 'application/json',
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
  public getStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<(Store & {
    Payment: Array<{
      publishableKey: string;
      type: PaymentType;
      email: string;
      updatedAt: string;
      createdAt: string;
      name: string;
      id: number;
    }>;
    Theme: Array<Theme>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}',
      path: {
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
   * @returns Store Ok
   * @throws ApiError
   */
  public updateStoreStatus({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateStoreStatusDto,
  }): CancelablePromise<Store> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/status',
      path: {
        'storeId': storeId,
      },
      body: requestBody,
      mediaType: 'application/json',
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
   * @returns Store Ok
   * @throws ApiError
   */
  public approveStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Store> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/status/approve',
      path: {
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
   * @returns Store Ok
   * @throws ApiError
   */
  public updateStorePaymentMethod({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateStorePaymentMethodDto,
  }): CancelablePromise<Store> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/payment-method',
      path: {
        'storeId': storeId,
      },
      body: requestBody,
      mediaType: 'application/json',
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
  public getStorePaymentMethod({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<{
    publishableKey: string;
    type: PaymentType;
    email: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/payment-method',
      path: {
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

}