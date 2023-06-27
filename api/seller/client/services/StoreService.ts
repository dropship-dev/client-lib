/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStoreDto } from '../models/CreateStoreDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { Prisma_SortOrder } from '../models/Prisma_SortOrder';
import type { StoreOrderBy } from '../models/StoreOrderBy';
import type { StoreRevenue } from '../models/StoreRevenue';
import type { StoreStatus } from '../models/StoreStatus';
import type { UpdateStoreCustomDomainDto } from '../models/UpdateStoreCustomDomainDto';
import type { UpdateStoreDto } from '../models/UpdateStoreDto';
import type { UpdateStoreStatusDto } from '../models/UpdateStoreStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StoreService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createStore({
    requestBody,
  }: {
    requestBody: CreateStoreDto,
  }): CancelablePromise<GetResult_any_any_any_> {
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
    periodTo = '2023-06-27T10:29:25.783Z',
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
  }): CancelablePromise<({
    _count?: {
      Order: number;
      RequestSourcing: number;
      Product: number;
      ActiveTheme: number;
      Transaction: number;
      Collection: number;
      Payment: number;
      Theme: number;
      StoreUser: number;
      Currency: number;
    };
    Order?: Array<GetResult_any_any_any_>;
    RequestSourcing?: Array<GetResult_any_any_any_>;
    Product?: Array<GetResult_any_any_any_>;
    ActiveTheme?: GetResult_any_any_any_;
    Transaction?: Array<GetResult_any_any_any_>;
    Collection?: Array<GetResult_any_any_any_>;
    Payment?: GetResult_any_any_any_;
    Theme?: Array<GetResult_any_any_any_>;
    Currency?: GetResult_any_any_any_;
    StoreUser: Array<GetResult_any_any_any_>;
  } & GetResult_any_any_any_)> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateStore({
    storeId,
    requestBody,
  }: {
    storeId: number,
    requestBody: UpdateStoreDto,
  }): CancelablePromise<GetResult_any_any_any_> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public deleteStore({
    storeId,
  }: {
    storeId: number,
  }): CancelablePromise<GetResult_any_any_any_> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateStoreStatus({
    storeId,
    requestBody,
  }: {
    storeId: number,
    requestBody: UpdateStoreStatusDto,
  }): CancelablePromise<GetResult_any_any_any_> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateStoreCustomDomain({
    storeId,
    requestBody,
  }: {
    storeId: number,
    requestBody: UpdateStoreCustomDomainDto,
  }): CancelablePromise<GetResult_any_any_any_> {
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

}
