/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDomainDto } from '../models/CreateDomainDto';
import type { CustomDomain } from '../models/CustomDomain';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DomainService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns CustomDomain Ok
   * @throws ApiError
   */
  public createDomain({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateDomainDto,
  }): CancelablePromise<CustomDomain> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/domain',
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
   * @returns CustomDomain Ok
   * @throws ApiError
   */
  public getAllDomain({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<CustomDomain>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/domain',
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
   * @returns CustomDomain Ok
   * @throws ApiError
   */
  public getDomain({
    storeId,
    domain,
  }: {
    storeId: string,
    domain: string,
  }): CancelablePromise<CustomDomain> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/domain/{domain}',
      path: {
        'storeId': storeId,
        'domain': domain,
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
   * @returns CustomDomain Ok
   * @throws ApiError
   */
  public verifyDomain({
    storeId,
    domain,
  }: {
    storeId: string,
    domain: string,
  }): CancelablePromise<CustomDomain> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/domain/{domain}',
      path: {
        'storeId': storeId,
        'domain': domain,
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
   * @returns void
   * @throws ApiError
   */
  public updateToPrimaryDomain({
    storeId,
    domain,
  }: {
    storeId: string,
    domain: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/domain/{domain}',
      path: {
        'storeId': storeId,
        'domain': domain,
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
   * @returns CustomDomain Ok
   * @throws ApiError
   */
  public deleteDomain({
    storeId,
    domain,
  }: {
    storeId: string,
    domain: string,
  }): CancelablePromise<CustomDomain> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/domain/{domain}',
      path: {
        'storeId': storeId,
        'domain': domain,
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
