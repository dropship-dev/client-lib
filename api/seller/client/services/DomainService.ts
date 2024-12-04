/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CustomDomainStatus } from '../models/_36_Enums_CustomDomainStatus';
import type { _36_Enums_DomainOrigin } from '../models/_36_Enums_DomainOrigin';
import type { BuyDomainDto } from '../models/BuyDomainDto';
import type { CreateDomainDto } from '../models/CreateDomainDto';
import type { PrismaJson_DomainContactInfo } from '../models/PrismaJson_DomainContactInfo';
import type { RenewDomainDto } from '../models/RenewDomainDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DomainService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createDomain({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateDomainDto,
  }): CancelablePromise<{
    isPrimary: boolean;
    contactInfo: PrismaJson_DomainContactInfo;
    renewable: boolean;
    renewalPrice: number;
    purchasePrice: number;
    domainOrigin: _36_Enums_DomainOrigin;
    autoRenew: boolean;
    expirationDate: string;
    target: string;
    domain: string;
    status: _36_Enums_CustomDomainStatus;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
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
    isPrimary: boolean;
    contactInfo: PrismaJson_DomainContactInfo;
    renewable: boolean;
    renewalPrice: number;
    purchasePrice: number;
    domainOrigin: _36_Enums_DomainOrigin;
    autoRenew: boolean;
    expirationDate: string;
    target: string;
    domain: string;
    status: _36_Enums_CustomDomainStatus;
    updatedAt: string;
    createdAt: string;
    storeId: string;
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
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/domain/switch-autorenew/{id}',
      path: {
        'storeId': storeId,
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
   * @returns string Ok
   * @throws ApiError
   */
  public renewDomainManually({
    storeId,
    id,
    requestBody,
  }: {
    storeId: string,
    id: number,
    requestBody?: RenewDomainDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/domain/renew/{id}',
      path: {
        'storeId': storeId,
        'id': id,
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
   * @returns void
   * @throws ApiError
   */
  public disableDomainRenewal({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/domain/disable-renewal/{id}',
      path: {
        'storeId': storeId,
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
  public getDomain({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<{
    isPrimary: boolean;
    contactInfo: PrismaJson_DomainContactInfo;
    renewable: boolean;
    renewalPrice: number;
    purchasePrice: number;
    domainOrigin: _36_Enums_DomainOrigin;
    autoRenew: boolean;
    expirationDate: string;
    target: string;
    domain: string;
    status: _36_Enums_CustomDomainStatus;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
    nextChargeDate: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/domain/{id}',
      path: {
        'storeId': storeId,
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
  public verifyDomain({
    storeId,
    domain,
  }: {
    storeId: string,
    domain: string,
  }): CancelablePromise<{
    isPrimary: boolean;
    contactInfo: PrismaJson_DomainContactInfo;
    renewable: boolean;
    renewalPrice: number;
    purchasePrice: number;
    domainOrigin: _36_Enums_DomainOrigin;
    autoRenew: boolean;
    expirationDate: string;
    target: string;
    domain: string;
    status: _36_Enums_CustomDomainStatus;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public deleteDomain({
    storeId,
    domain,
  }: {
    storeId: string,
    domain: string,
  }): CancelablePromise<{
    isPrimary: boolean;
    contactInfo: PrismaJson_DomainContactInfo;
    renewable: boolean;
    renewalPrice: number;
    purchasePrice: number;
    domainOrigin: _36_Enums_DomainOrigin;
    autoRenew: boolean;
    expirationDate: string;
    target: string;
    domain: string;
    status: _36_Enums_CustomDomainStatus;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
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
