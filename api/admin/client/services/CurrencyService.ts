/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCurrencyDto } from '../models/CreateCurrencyDto';
import type { Currency } from '../models/Currency';
import type { UpdateCurrencyDto } from '../models/UpdateCurrencyDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CurrencyService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Currency Ok
   * @throws ApiError
   */
  public getCurrency({
    id,
  }: {
    id: number,
  }): CancelablePromise<Currency> {
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
   * @returns Currency Ok
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
  }): CancelablePromise<Currency> {
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
   * @returns Currency Ok
   * @throws ApiError
   */
  public createCurrency({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: CreateCurrencyDto,
  }): CancelablePromise<Currency> {
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
