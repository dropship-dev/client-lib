/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_EmailTrackingAction } from '../models/_36_Enums_EmailTrackingAction';
import type { _36_Enums_OrderTrackingEmailStatus } from '../models/_36_Enums_OrderTrackingEmailStatus';
import type { _36_Enums_OrderTrackingRecoveredStatus } from '../models/_36_Enums_OrderTrackingRecoveredStatus';
import type { CreateTemplateDto } from '../models/CreateTemplateDto';
import type { OrderTrackingEmailStatusDto } from '../models/OrderTrackingEmailStatusDto';
import type { OrderTrackingRecoveredStatusDto } from '../models/OrderTrackingRecoveredStatusDto';
import type { PrismaJson_CreateComboItems } from '../models/PrismaJson_CreateComboItems';
import type { PrismaJson_CreateOrderItems } from '../models/PrismaJson_CreateOrderItems';
import type { UpdateActiveStatusAutomationEmailMarketingDto } from '../models/UpdateActiveStatusAutomationEmailMarketingDto';
import type { UpdateAutomationEmailMarketingDto } from '../models/UpdateAutomationEmailMarketingDto';
import type { UpdateTemplateDto } from '../models/UpdateTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MarketingEmailService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns void
   * @throws ApiError
   */
  public updateAutomationEmailMarketing({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateAutomationEmailMarketingDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/marketing/email/abandonment/settings/{storeId}',
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
   * @returns void
   * @throws ApiError
   */
  public updateActiveStatusAutomationEmailMarketing({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateActiveStatusAutomationEmailMarketingDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/marketing/email/abandonment/settings/{storeId}',
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
  public listAbandonmentSettings({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    items: Array<{
      emailMarketingTemplate: {
        data: string;
        id: number;
      };
      createdAt: string;
      advance: {
        specificTime: string;
        specificDays: Array<string>;
      };
      unit: string;
      timeDelay: string;
      subjectLine: string;
      templateId: number;
      id: number;
    }>;
    senderName: string;
    isActive: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/email/abandonment/settings/{storeId}',
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
  public emailAssignment({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    email: string;
    replyToEmail: string;
    fromName: string;
    emailUsernameId: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/email/abandonment/store/{storeId}/email-assignment',
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
  public listAbandonmentOrders({
    storeId,
    nextPageIndex,
    pageSize = 20,
    emailStatus,
    recoveryStatus,
    id,
    startDate,
    endDate,
  }: {
    storeId: string,
    nextPageIndex?: number,
    pageSize?: number,
    emailStatus?: Array<OrderTrackingEmailStatusDto>,
    recoveryStatus?: Array<OrderTrackingRecoveredStatusDto>,
    id?: string,
    startDate?: string,
    endDate?: string,
  }): CancelablePromise<{
    nextPageIndex: number;
    prePageIndex: number;
    data: Array<{
      emailStatus: _36_Enums_OrderTrackingEmailStatus;
      recoveredStatus: _36_Enums_OrderTrackingRecoveredStatus;
      total: number;
      expiredAt: string;
      email: string;
      createdAt: string;
      id: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/email/abandonment/store/{storeId}/orders',
      path: {
        'storeId': storeId,
      },
      query: {
        'nextPageIndex': nextPageIndex,
        'pageSize': pageSize,
        'emailStatus': emailStatus,
        'recoveryStatus': recoveryStatus,
        'id': id,
        'startDate': startDate,
        'endDate': endDate,
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
  public getDetailAbandonmentCheckout({
    storeId,
    orderTrackingId,
  }: {
    storeId: string,
    orderTrackingId: number,
  }): CancelablePromise<{
    emailStatus: _36_Enums_OrderTrackingEmailStatus;
    recoveredStatus: _36_Enums_OrderTrackingRecoveredStatus;
    phoneNumber: string;
    comboItems: PrismaJson_CreateComboItems;
    orderItems: PrismaJson_CreateOrderItems;
    discountShippingFee: number;
    subTotal: number;
    total: number;
    expiredAt: string;
    email: string;
    createdAt: string;
    id: number;
    EmailTrackings: Array<{
      AbandonmentReminder: {
        AbandonmentSettings: {
          subjectLine: string;
        };
      };
      action: _36_Enums_EmailTrackingAction;
      createdAt: string;
    }>;
    checkoutDetail: Array<{
      comboVariantName?: string;
      productVariantName?: string;
      name: string;
      quantity: number;
      price: number;
      photo: string;
    }>;
    shippingFee: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/email/abandonment/store/{storeId}/orders/{orderTrackingId}',
      path: {
        'storeId': storeId,
        'orderTrackingId': orderTrackingId,
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
  public createTemplate({
    requestBody,
  }: {
    requestBody: CreateTemplateDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/marketing/email/template/settings',
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
  public updateTemplate({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateTemplateDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/marketing/email/template/settings/{id}',
      path: {
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
   * @returns any Ok
   * @throws ApiError
   */
  public getStatisticsStoreAbandonmentCheckout({
    storeId,
    startTime = '2023-01-02T00:00:00.000Z',
    endTime,
  }: {
    storeId: string,
    startTime?: string,
    endTime?: string,
  }): CancelablePromise<{
    orderCompletedPercent: number;
    orderCompleted: number;
    clickPercent: number;
    totalClick: number;
    openPercent: number;
    totalOpen: number;
    sentPercent: number;
    totalSent: number;
    revenueGrowthPercent: number;
    revenue: number;
    orderConvertedGrowthPercent: number;
    orderConverted: number;
    conversionRateGrowthPercent: number;
    conversionRate: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/statistics/abandonments-checkout/store/{storeId}',
      path: {
        'storeId': storeId,
      },
      query: {
        'startTime': startTime,
        'endTime': endTime,
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
