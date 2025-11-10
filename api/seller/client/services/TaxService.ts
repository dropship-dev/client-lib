/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_AsyncTaskStatus } from '../models/_36_Enums_AsyncTaskStatus';
import type { _36_Enums_TaxProviderOwner } from '../models/_36_Enums_TaxProviderOwner';
import type { _36_Enums_TaxProviderType } from '../models/_36_Enums_TaxProviderType';
import type { ClearCacheDto } from '../models/ClearCacheDto';
import type { ConnectCustomTaxDto } from '../models/ConnectCustomTaxDto';
import type { ConnectQuadernoDto } from '../models/ConnectQuadernoDto';
import type { CreateTaxDataGroupDto } from '../models/CreateTaxDataGroupDto';
import type { ImportTaxDataDto } from '../models/ImportTaxDataDto';
import type { PrismaJson_AsyncTaskResult } from '../models/PrismaJson_AsyncTaskResult';
import type { PrismaJson_TaxCustomDataJSON } from '../models/PrismaJson_TaxCustomDataJSON';
import type { TaxProviderItem } from '../models/TaxProviderItem';
import type { UpdateConfigTaxProviderDto } from '../models/UpdateConfigTaxProviderDto';
import type { UpdateNameTaxProviderDto } from '../models/UpdateNameTaxProviderDto';
import type { UploadTaxDataDto } from '../models/UploadTaxDataDto';
import type { ValidateQuadernoDto } from '../models/ValidateQuadernoDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TaxService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns void
   * @throws ApiError
   */
  public connectQuaderno({
    requestBody,
  }: {
    requestBody: ConnectQuadernoDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tax/connect/quaderno',
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
  public clearCache({
    requestBody,
  }: {
    requestBody: ClearCacheDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/tax/cache',
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
   * @returns TaxProviderItem Ok
   * @throws ApiError
   */
  public getListTaxProvider({
    storeId,
    fulfillmentAgencyId,
  }: {
    /**
     * Store id (optional), but required when role is SELLER
     */
    storeId?: string,
    /**
     * Fulfillment agency id (optional), but required when role is ADMIN
     */
    fulfillmentAgencyId?: number,
  }): CancelablePromise<Array<TaxProviderItem>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tax',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public getDetailTaxProvider({
    taxProviderId,
    storeId,
    fulfillmentAgencyId,
  }: {
    taxProviderId: number,
    /**
     * Store id (optional), but required when role is SELLER
     */
    storeId?: string,
    /**
     * Fulfillment agency id (optional), but required when role is ADMIN
     */
    fulfillmentAgencyId?: number,
  }): CancelablePromise<{
    name: string;
    url: string;
    publicKey: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tax/{taxProviderId}',
      path: {
        'taxProviderId': taxProviderId,
      },
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public removeTaxProviderCache({
    taxProviderId,
    storeId,
    fulfillmentAgencyId,
  }: {
    taxProviderId: number,
    /**
     * Store id (optional), but required when role is SELLER
     */
    storeId?: string,
    /**
     * Fulfillment agency id (optional), but required when role is ADMIN
     */
    fulfillmentAgencyId?: number,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/tax/{taxProviderId}',
      path: {
        'taxProviderId': taxProviderId,
      },
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public validateQuaderno({
    requestBody,
  }: {
    requestBody: ValidateQuadernoDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tax/validate',
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
  public updateNameTaxProvider({
    taxProviderId,
    requestBody,
  }: {
    taxProviderId: number,
    requestBody: UpdateNameTaxProviderDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/tax/{taxProviderId}/name',
      path: {
        'taxProviderId': taxProviderId,
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
  public updateConfigTaxProvider({
    taxProviderId,
    requestBody,
  }: {
    taxProviderId: number,
    requestBody: UpdateConfigTaxProviderDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/tax/{taxProviderId}/config',
      path: {
        'taxProviderId': taxProviderId,
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
  public createTaxDataGroup({
    requestBody,
  }: {
    requestBody: CreateTaxDataGroupDto,
  }): CancelablePromise<{
    expiredAt: string;
    groupId: string;
    token: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tax/custom/data/group',
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
  public uploadTaxData({
    requestBody,
  }: {
    requestBody: UploadTaxDataDto,
  }): CancelablePromise<{
    signedUrl: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tax/custom/data/upload',
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
  public importTaxData({
    requestBody,
  }: {
    requestBody: ImportTaxDataDto,
  }): CancelablePromise<{
    id: string;
    groupFound: {
      expiredAt: string;
      groupId: string;
      token: string;
      data: PrismaJson_TaxCustomDataJSON;
      updatedAt: string;
      createdAt: string;
      fulfillmentAgencyId: number;
      id: number;
    };
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tax/custom/data/import',
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
  public getStatusImportTaxData({
    taskId,
  }: {
    taskId: string,
  }): CancelablePromise<{
    result: PrismaJson_AsyncTaskResult;
    id: string;
    status: _36_Enums_AsyncTaskStatus;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tax/custom/data/import/{taskId}',
      path: {
        'taskId': taskId,
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
  public connectCustomTax({
    requestBody,
  }: {
    requestBody: ConnectCustomTaxDto,
  }): CancelablePromise<{
    taxProvider: {
      owner: _36_Enums_TaxProviderOwner;
      url: string;
      publicKey: string;
      apiKey: string;
      salt: string;
      type: _36_Enums_TaxProviderType;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      fulfillmentAgencyId: number;
      id: number;
    };
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tax/custom/connect',
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
