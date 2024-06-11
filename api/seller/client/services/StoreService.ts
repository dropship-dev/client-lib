/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostCalculationMethod } from '../models/CostCalculationMethod';
import type { CreateStoreDto } from '../models/CreateStoreDto';
import type { PaymentType } from '../models/PaymentType';
import type { Store } from '../models/Store';
import type { StoreRole } from '../models/StoreRole';
import type { StoreStatus } from '../models/StoreStatus';
import type { Theme } from '../models/Theme';
import type { ThemePage } from '../models/ThemePage';
import type { Timezone } from '../models/Timezone';
import type { UpdateStoreDto } from '../models/UpdateStoreDto';
import type { UpdateStoreStatusDto } from '../models/UpdateStoreStatusDto';
import type { Wallet } from '../models/Wallet';

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
    fulfillmentAgencyId,
    pageSize = 20,
    status,
    periodFrom = '2023-01-01T00:00:00.000Z',
    nextPageIndex,
    name,
    userId,
    paymentGatewayIds,
    platformProductId,
    referralCode,
  }: {
    fulfillmentAgencyId?: number,
    /**
     * number of stores to return
     */
    pageSize?: number,
    status?: Array<StoreStatus>,
    periodFrom?: string,
    /**
     * last store id of previous page. Set to 0 to get first page
     */
    nextPageIndex?: string,
    /**
     * filter by store name
     */
    name?: string,
    /**
     * filter by user id. This param is only available for admin
     */
    userId?: string,
    paymentGatewayIds?: Array<number>,
    platformProductId?: number,
    referralCode?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      referralCode: string;
      primaryDomain: string;
      subDomain: string;
      avatar: string;
      timezone: Timezone;
      phone: string;
      email: string;
      name: string;
      Wallet: Array<Wallet>;
      FulfillmentAgency: {
        costCalculationMethod: CostCalculationMethod;
      };
      Payment: Array<{
        name: string;
        type: PaymentType;
        id: number;
      }>;
      StoreUser: Array<{
        role: StoreRole;
      }>;
      createdAt: string;
      status: StoreStatus;
      id: string;
      fulfillmentAgencyId: number;
      userRole: StoreRole;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'pageSize': pageSize,
        'status': status,
        'periodFrom': periodFrom,
        'nextPageIndex': nextPageIndex,
        'name': name,
        'userId': userId,
        'paymentGatewayIds': paymentGatewayIds,
        'platformProductId': platformProductId,
        'referralCode': referralCode,
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
    storeId: string,
  }): CancelablePromise<(Store & {
    Wallet: Array<Wallet>;
    Payment: Array<{
      publishableKey: string;
      isShowCompanyAddress: boolean;
      companyAddress: string;
      companyPhone: string;
      companyName: string;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      type: PaymentType;
      id: number;
      fulfillmentAgencyId: number;
    }>;
    Theme: Array<(Theme & {
      ThemePage: Array<ThemePage>;
    })>;
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
   * @returns string Ok
   * @throws ApiError
   */
  public updateStore({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateStoreDto,
  }): CancelablePromise<string> {
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
    storeId: string,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getStorePaymentMethod({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<{
    publishableKey: string;
    isShowCompanyAddress: boolean;
    companyAddress: string;
    companyPhone: string;
    companyName: string;
    email: string;
    updatedAt: string;
    createdAt: string;
    type: PaymentType;
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
