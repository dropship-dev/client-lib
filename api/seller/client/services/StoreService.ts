/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActiveTheme } from '../models/ActiveTheme';
import type { Collection } from '../models/Collection';
import type { CreateStoreDto } from '../models/CreateStoreDto';
import type { Currency } from '../models/Currency';
import type { Order } from '../models/Order';
import type { Payment } from '../models/Payment';
import type { PaymentType } from '../models/PaymentType';
import type { Prisma_SortOrder } from '../models/Prisma_SortOrder';
import type { Product } from '../models/Product';
import type { RequestSourcing } from '../models/RequestSourcing';
import type { Store } from '../models/Store';
import type { StoreCountOutputType } from '../models/StoreCountOutputType';
import type { StoreOrderBy } from '../models/StoreOrderBy';
import type { StoreRevenue } from '../models/StoreRevenue';
import type { StoreStatus } from '../models/StoreStatus';
import type { StoreUser } from '../models/StoreUser';
import type { Tag } from '../models/Tag';
import type { Theme } from '../models/Theme';
import type { Transaction } from '../models/Transaction';
import type { UpdateStoreCustomDomainDto } from '../models/UpdateStoreCustomDomainDto';
import type { UpdateStoreDto } from '../models/UpdateStoreDto';
import type { UpdateStoreStatusDto } from '../models/UpdateStoreStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StoreService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Store Ok
   * @throws ApiError
   */
  public createStore({
    requestBody,
  }: {
    requestBody: CreateStoreDto,
  }): CancelablePromise<Store> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store',
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
  public getAllStores({
    pageSize = 20,
    status,
    orderBy,
    order,
    periodFrom = '2023-01-01T00:00:00.000Z',
    periodTo = '2023-07-17T14:21:09.493Z',
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
   * @returns any Ok
   * @throws ApiError
   */
  public getStore({
    storeId,
  }: {
    storeId: number,
  }): CancelablePromise<(Store & {
    _count?: StoreCountOutputType;
    Currency?: Currency;
    Order?: Array<Order>;
    Transaction?: Array<Transaction>;
    RequestSourcing?: Array<RequestSourcing>;
    Product?: Array<Product>;
    Tag?: Array<Tag>;
    Payment?: Array<Payment>;
    Collection?: Array<Collection>;
    Theme?: Array<Theme>;
    ActiveTheme?: ActiveTheme;
    StoreUser: Array<StoreUser>;
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
  public updateStore({
    storeId,
    requestBody,
  }: {
    storeId: number,
    requestBody: UpdateStoreDto,
  }): CancelablePromise<Store> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}',
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
  public deleteStore({
    storeId,
  }: {
    storeId: number,
  }): CancelablePromise<Store> {
    return this.httpRequest.request({
      method: 'DELETE',
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
    storeId: number,
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
  public updateStoreCustomDomain({
    storeId,
    requestBody,
  }: {
    storeId: number,
    requestBody: UpdateStoreCustomDomainDto,
  }): CancelablePromise<Store> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/custom-domain',
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
    storeId: number,
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
