/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_RequestSourcingStatus } from '../models/_36_Enums_RequestSourcingStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from '../models/_36_Enums_StoreType';
import type { ApproveRequestSourcingDto } from '../models/ApproveRequestSourcingDto';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_RequestSourcingHistory } from '../models/PrismaJson_RequestSourcingHistory';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { PrismaJson_VariantPlatformSnapshot } from '../models/PrismaJson_VariantPlatformSnapshot';
import type { RejectRequestSourcingDto } from '../models/RejectRequestSourcingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RequestSourcingService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllRequestSourcing({
    storeId,
    fulfillmentAgencyId,
    statusRequest,
    search,
    startDate,
    endDate,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
    statusRequest?: Array<_36_Enums_RequestSourcingStatus>,
    search?: string,
    startDate?: string,
    endDate?: string,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<({
      RequestSourcingSnapshot: {
        requestSourcingId: number;
        variantNamePlatform: PrismaJson_VariantPlatformSnapshot;
        snapshotAt: string;
        details: string;
        platformProductId: number;
        photos: PrismaJson_Photos;
        description: string;
        name: string;
        id: number;
      };
      Store: {
        isConversionRate: boolean;
        stripeDefaultPaymentMethodId: string;
        stripeCustomerId: string;
        warning: boolean;
        invitedDate: string;
        invitedById: number;
        currencyId: number;
        maxUsers: number;
        balance: number;
        referralCode: string;
        defaultBankAccount: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        primaryDomain: string;
        subDomain: string;
        pageName: string;
        closedAt: string;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        avatar: string;
        othersFee: number;
        shippingPolicy: string;
        termsOfService: string;
        refundPolicy: string;
        privacyPolicy: string;
        timezone: PrismaJson_Timezone;
        type: _36_Enums_StoreType;
        status: _36_Enums_StoreStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: string;
      };
    } & {
      requestSourcingSnapshotId: number;
      productId: number;
      historyRequestSourcing: PrismaJson_RequestSourcingHistory;
      acceptByAdmin: boolean;
      acceptBySeller: boolean;
      rejectReasonByAdmin: string;
      rejectReasonBySeller: string;
      requestId: string;
      platformProductId: number;
      photos: PrismaJson_Photos;
      description: string;
      status: _36_Enums_RequestSourcingStatus;
      name: string;
      updatedAt: string;
      createdAt: string;
      isDeleted: boolean;
      storeId: string;
      id: number;
      link: string;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-sourcing',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'statusRequest': statusRequest,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getRequestSourcing({
    id,
    storeId,
    fulfillmentAgencyId,
  }: {
    id: number,
    storeId?: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<({
    RequestSourcingSnapshot: {
      requestSourcingId: number;
      variantNamePlatform: PrismaJson_VariantPlatformSnapshot;
      snapshotAt: string;
      details: string;
      platformProductId: number;
      photos: PrismaJson_Photos;
      description: string;
      name: string;
      id: number;
    };
    Store: {
      isConversionRate: boolean;
      stripeDefaultPaymentMethodId: string;
      stripeCustomerId: string;
      warning: boolean;
      invitedDate: string;
      invitedById: number;
      currencyId: number;
      maxUsers: number;
      balance: number;
      referralCode: string;
      defaultBankAccount: string;
      shippingFeeAdditional: number;
      shippingFee: number;
      primaryDomain: string;
      subDomain: string;
      pageName: string;
      closedAt: string;
      country: string;
      zipCode: string;
      city: string;
      apartmentAddress: string;
      address: string;
      avatar: string;
      othersFee: number;
      shippingPolicy: string;
      termsOfService: string;
      refundPolicy: string;
      privacyPolicy: string;
      timezone: PrismaJson_Timezone;
      type: _36_Enums_StoreType;
      status: _36_Enums_StoreStatus;
      phone: string;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      isDeleted: boolean;
      fulfillmentAgencyId: number;
      id: string;
    };
  } & {
    requestSourcingSnapshotId: number;
    productId: number;
    historyRequestSourcing: PrismaJson_RequestSourcingHistory;
    acceptByAdmin: boolean;
    acceptBySeller: boolean;
    rejectReasonByAdmin: string;
    rejectReasonBySeller: string;
    requestId: string;
    platformProductId: number;
    photos: PrismaJson_Photos;
    description: string;
    status: _36_Enums_RequestSourcingStatus;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    id: number;
    link: string;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-sourcing/{id}',
      path: {
        'id': id,
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
   * @returns any Ok
   * @throws ApiError
   */
  public setProcessingRequestSourcing({
    id,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: number,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<{
    requestSourcingSnapshotId: number;
    productId: number;
    historyRequestSourcing: PrismaJson_RequestSourcingHistory;
    acceptByAdmin: boolean;
    acceptBySeller: boolean;
    rejectReasonByAdmin: string;
    rejectReasonBySeller: string;
    requestId: string;
    platformProductId: number;
    photos: PrismaJson_Photos;
    description: string;
    status: _36_Enums_RequestSourcingStatus;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    id: number;
    link: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/request-sourcing/{id}/processing',
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
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public approveRequestSourcing({
    id,
    requestBody,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: number,
    requestBody: ApproveRequestSourcingDto,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<{
    requestSourcingSnapshotId: number;
    productId: number;
    historyRequestSourcing: PrismaJson_RequestSourcingHistory;
    acceptByAdmin: boolean;
    acceptBySeller: boolean;
    rejectReasonByAdmin: string;
    rejectReasonBySeller: string;
    requestId: string;
    platformProductId: number;
    photos: PrismaJson_Photos;
    description: string;
    status: _36_Enums_RequestSourcingStatus;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    id: number;
    link: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/request-sourcing/{id}/approve',
      path: {
        'id': id,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public rejectRequestSourcing({
    id,
    requestBody,
    storeId,
    fulfillmentAgencyId,
  }: {
    id: number,
    requestBody: RejectRequestSourcingDto,
    storeId?: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<{
    requestSourcingSnapshotId: number;
    productId: number;
    historyRequestSourcing: PrismaJson_RequestSourcingHistory;
    acceptByAdmin: boolean;
    acceptBySeller: boolean;
    rejectReasonByAdmin: string;
    rejectReasonBySeller: string;
    requestId: string;
    platformProductId: number;
    photos: PrismaJson_Photos;
    description: string;
    status: _36_Enums_RequestSourcingStatus;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    id: number;
    link: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/request-sourcing/{id}/reject',
      path: {
        'id': id,
      },
      query: {
        'storeId': storeId,
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
