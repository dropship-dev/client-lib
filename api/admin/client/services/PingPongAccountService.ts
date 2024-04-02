/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PingPongAccount } from '../models/PingPongAccount';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PingPongAccountService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns PingPongAccount Ok
   * @throws ApiError
   */
  public getAllPingPongAccount({
    fulfillmentAgencyId,
    storeId,
  }: {
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<Array<PingPongAccount>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pingpong-account',
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
   * @returns PingPongAccount Ok
   * @throws ApiError
   */
  public getPingPongAccount({
    id,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: string,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<PingPongAccount> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pingpong-account/{id}',
      path: {
        'id': id,
      },
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

}
