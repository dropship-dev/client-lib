/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuyDomainDto } from '../models/BuyDomainDto';
import type { CreateDomainDto } from '../models/CreateDomainDto';
import type { CustomDomain } from '../models/CustomDomain';
import type { CustomDomainStatus } from '../models/CustomDomainStatus';
import type { DomainContactInfo } from '../models/DomainContactInfo';
import type { DomainOrigin } from '../models/DomainOrigin';
import type { RenewDomainDto } from '../models/RenewDomainDto';

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
   * @returns any Ok
   * @throws ApiError
   */
  public getAllDomain({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<{
    updatedAt: string;
    createdAt: string;
    isPrimary: boolean;
    storeId: string;
    contactInfo: DomainContactInfo;
    subscriptionId: string;
    renewalPrice: number;
    purchasePrice: number;
    domainOrigin: DomainOrigin;
    autoRenew: boolean;
    expirationDate: string;
    status: CustomDomainStatus;
    target: string;
    domain: string;
    id: number;
    nextChargeDate: string;
  }>> {
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
   * @returns string Ok
   * @throws ApiError
   */
  public buyDomain({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: BuyDomainDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/domain/buy-domain',
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
  public searchDomain({
    storeId,
    keyword,
  }: {
    storeId: string,
    keyword: string,
  }): CancelablePromise<Array<{
    purchaseType: string;
    renewalPrice: number;
    purchasePrice: number;
    purchasable: boolean;
    domainName: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/domain/search-domain',
      path: {
        'storeId': storeId,
      },
      query: {
        'keyword': keyword,
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
  public switchAutoRenewDomain({
    storeId,
    domain,
  }: {
    storeId: string,
    domain: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/domain/switch-autorenew/{domain}',
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
   * @returns string Ok
   * @throws ApiError
   */
  public renewDomainManually({
    storeId,
    domain,
    requestBody,
  }: {
    storeId: string,
    domain: string,
    requestBody: RenewDomainDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/domain/renew/{domain}',
      path: {
        'storeId': storeId,
        'domain': domain,
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
  public getDomain({
    storeId,
    domain,
  }: {
    storeId: string,
    domain: string,
  }): CancelablePromise<{
    updatedAt: string;
    createdAt: string;
    isPrimary: boolean;
    storeId: string;
    contactInfo: DomainContactInfo;
    subscriptionId: string;
    renewalPrice: number;
    purchasePrice: number;
    domainOrigin: DomainOrigin;
    autoRenew: boolean;
    expirationDate: string;
    status: CustomDomainStatus;
    target: string;
    domain: string;
    id: number;
    nextChargeDate: string;
  }> {
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
