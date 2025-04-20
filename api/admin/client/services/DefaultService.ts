/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { CreateCollectionDefaultDto } from '../models/CreateCollectionDefaultDto';
import type { FulfillmentShippingCostDto } from '../models/FulfillmentShippingCostDto';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_CountryInformation } from '../models/PrismaJson_CountryInformation';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlatformCostInfo } from '../models/PrismaJson_PlatformCostInfo';
import type { UpdateCollectionDefaultDto } from '../models/UpdateCollectionDefaultDto';
import type { UpdateCollectionDefaultStatusDto } from '../models/UpdateCollectionDefaultStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createFulfillmentShippingFee({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: FulfillmentShippingCostDto,
  }): CancelablePromise<{
    countries: PrismaJson_CountryInformation;
    zoneName: string;
    settingId: number;
    deleted: boolean;
    shippingFee: number;
    updatedAt: string;
    createdAt: string;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost',
      path: {
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
   * @returns any Ok
   * @throws ApiError
   */
  public getAllRegionalShippingFee({
    fulfillmentAgencyId,
    search,
    startDate,
    endDate,
    pageSize = 20,
    nextPageIndex,
  }: {
    fulfillmentAgencyId: number,
    search?: string,
    startDate?: string,
    endDate?: string,
    pageSize?: number,
    nextPageIndex?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      countries: PrismaJson_CountryInformation;
      zoneName: string;
      settingId: number;
      deleted: boolean;
      shippingFee: number;
      updatedAt: string;
      createdAt: string;
      id: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost',
      path: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
      },
      query: {
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
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
  public getCountriesExistOnStore({
    fulfillmentAgencyId,
  }: {
    fulfillmentAgencyId: number,
  }): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost/get-countries-exist-on-fulfillment',
      path: {
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
  public getRegionalShippingFee({
    fulfillmentAgencyId,
    id,
  }: {
    fulfillmentAgencyId: number,
    id: string,
  }): CancelablePromise<{
    countries: PrismaJson_CountryInformation;
    zoneName: string;
    settingId: number;
    deleted: boolean;
    shippingFee: number;
    updatedAt: string;
    createdAt: string;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost/{id}',
      path: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public deleteReasonShippingFee({
    fulfillmentAgencyId,
    id,
  }: {
    fulfillmentAgencyId: number,
    id: string,
  }): CancelablePromise<{
    countries: PrismaJson_CountryInformation;
    zoneName: string;
    settingId: number;
    deleted: boolean;
    shippingFee: number;
    updatedAt: string;
    createdAt: string;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost/{id}',
      path: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public updateReasonShippingFee({
    fulfillmentAgencyId,
    id,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    id: string,
    requestBody: FulfillmentShippingCostDto,
  }): CancelablePromise<{
    countries: PrismaJson_CountryInformation;
    zoneName: string;
    settingId: number;
    deleted: boolean;
    shippingFee: number;
    updatedAt: string;
    createdAt: string;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost/{id}',
      path: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns string Ok
   * @throws ApiError
   */
  public resetSetting({
    fulfillmentAgencyId,
  }: {
    fulfillmentAgencyId: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost/reset-setting',
      path: {
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
  public createCollectionDefault({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: CreateCollectionDefaultDto,
  }): CancelablePromise<{
    SEO: any;
    condition: PrismaJson_ConditionCollection;
    settingId: number;
    photos: PrismaJson_Photos;
    description: string;
    type: _36_Enums_CollectionType;
    status: _36_Enums_CollectionStatus;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default',
      path: {
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
   * @returns any Ok
   * @throws ApiError
   */
  public getAllCollectionDefault({
    fulfillmentAgencyId,
    pageSize = 20,
    nextPageIndex,
    startDate,
    endDate,
    search,
    collectionType,
    collectionStatus,
  }: {
    fulfillmentAgencyId: number,
    pageSize?: number,
    nextPageIndex?: number,
    startDate?: string,
    endDate?: string,
    search?: string,
    collectionType?: _36_Enums_CollectionType,
    collectionStatus?: _36_Enums_CollectionStatus,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<({
      PlatformProduct: Array<{
        isEnable: boolean;
        deleted: boolean;
        photos: PrismaJson_Photos;
        isActive: boolean;
        name: string;
        id: number;
        PlatformVariant: Array<{
          cost: PrismaJson_PlatformCostInfo;
          price: number;
        }>;
      }>;
    } & {
      SEO: any;
      condition: PrismaJson_ConditionCollection;
      settingId: number;
      photos: PrismaJson_Photos;
      description: string;
      type: _36_Enums_CollectionType;
      status: _36_Enums_CollectionStatus;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: number;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default',
      path: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
      },
      query: {
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
        'startDate': startDate,
        'endDate': endDate,
        'search': search,
        'collectionType': collectionType,
        'collectionStatus': collectionStatus,
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
  public getCollection({
    id,
    fulfillmentAgencyId,
    isActiveProduct,
    isEnableProduct,
    deletedProduct,
  }: {
    id: number,
    fulfillmentAgencyId: number,
    isActiveProduct?: boolean,
    isEnableProduct?: boolean,
    deletedProduct?: boolean,
  }): CancelablePromise<({
    PlatformProduct: Array<{
      isEnable: boolean;
      deleted: boolean;
      photos: PrismaJson_Photos;
      isActive: boolean;
      name: string;
      id: number;
      PlatformVariant: Array<{
        cost: PrismaJson_PlatformCostInfo;
        price: number;
      }>;
    }>;
  } & {
    SEO: any;
    condition: PrismaJson_ConditionCollection;
    settingId: number;
    photos: PrismaJson_Photos;
    description: string;
    type: _36_Enums_CollectionType;
    status: _36_Enums_CollectionStatus;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default/{id}',
      path: {
        'id': id,
        'fulfillmentAgencyId': fulfillmentAgencyId,
      },
      query: {
        'isActiveProduct': isActiveProduct,
        'isEnableProduct': isEnableProduct,
        'deletedProduct': deletedProduct,
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
  public deleteCollection({
    id,
    fulfillmentAgencyId,
  }: {
    id: number,
    fulfillmentAgencyId: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default/{id}',
      path: {
        'id': id,
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
  public updateCollection({
    id,
    fulfillmentAgencyId,
    requestBody,
  }: {
    id: number,
    fulfillmentAgencyId: number,
    requestBody: UpdateCollectionDefaultDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default/{id}',
      path: {
        'id': id,
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
   * @returns string Ok
   * @throws ApiError
   */
  public deleteManyCollection({
    id,
    fulfillmentAgencyId,
  }: {
    id: Array<number>,
    fulfillmentAgencyId: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default/delete-many-collection',
      path: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
      },
      query: {
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
   * @returns void
   * @throws ApiError
   */
  public updateStatusesCollection({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: UpdateCollectionDefaultStatusDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default/status',
      path: {
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
