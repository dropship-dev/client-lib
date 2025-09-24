/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCurrencyDto } from '../models/CreateCurrencyDto';
import type { Currency } from '../models/Currency';
import type { UpdateCurrencyDto } from '../models/UpdateCurrencyDto';
import type { UpdateStoreConversionRateDto } from '../models/UpdateStoreConversionRateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CurrencyService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public updateStoreConversionRate({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateStoreConversionRateDto,
  }): CancelablePromise<{
    isConversionRate: boolean | null;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/currency',
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
  public getPopularStoreConversionRate({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    conversionsRate: Array<{
      rate: number;
      toCurrency: string;
      fromCurrency: string;
    }>;
    currentCurrencyCode: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/currency/popular',
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
  public getCurrency({
    id,
  }: {
    id: number,
  }): CancelablePromise<{
    isSupported: boolean;
    rateToUSD: number;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
    symbol: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/currency/{id}',
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
  public updateCurrency({
    fulfillmentAgencyId,
    id,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    id: number,
    requestBody: UpdateCurrencyDto,
  }): CancelablePromise<{
    isSupported: boolean;
    rateToUSD: number;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
    symbol: string;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/currency/{id}',
      path: {
        'id': id,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns Currency Ok
   * @throws ApiError
   */
  public getAllCurrency({
    fulfillmentAgencyId,
    storeId,
  }: {
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<Array<Currency>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/currency',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public createCurrency({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: CreateCurrencyDto,
  }): CancelablePromise<{
    isSupported: boolean;
    rateToUSD: number;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
    symbol: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/currency',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
