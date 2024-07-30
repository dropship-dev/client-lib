/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateComboItems } from '../models/CreateComboItems';
import type { CreateOrderItems } from '../models/CreateOrderItems';
import type { CreateTemplateDto } from '../models/CreateTemplateDto';
import type { EmailTrackingAction } from '../models/EmailTrackingAction';
import type { OrderTrackingEmailStatus } from '../models/OrderTrackingEmailStatus';
import type { OrderTrackingEmailStatusDto } from '../models/OrderTrackingEmailStatusDto';
import type { OrderTrackingRecoveredStatus } from '../models/OrderTrackingRecoveredStatus';
import type { OrderTrackingRecoveredStatusDto } from '../models/OrderTrackingRecoveredStatusDto';
import type { UpdateActiveStatusAutomationEmailMarketingDto } from '../models/UpdateActiveStatusAutomationEmailMarketingDto';
import type { UpdateAutomationEmailMarketingDto } from '../models/UpdateAutomationEmailMarketingDto';
import type { UpdateTemplateDto } from '../models/UpdateTemplateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MarketingEmailService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getStatisticsStoreAbandonmentCheckout({
    storeId,
    startTime = '2023-01-02T00:00:00.000Z',
    endTime = '2024-07-30T08:45:18.871Z',
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
  public listAbandonmentOrders({
    storeId,
    pageSize,
    nextPageIndex,
    emailStatus,
    recoveryStatus,
    id,
    startDate,
    endDate,
  }: {
    storeId: string,
    pageSize: number,
    nextPageIndex?: number,
    emailStatus?: Array<OrderTrackingEmailStatusDto>,
    recoveryStatus?: Array<OrderTrackingRecoveredStatusDto>,
    id?: number,
    startDate?: string,
    endDate?: string,
  }): CancelablePromise<{
    nextPageIndex: number;
    prePageIndex: number;
    data: Array<{
      emailStatus: OrderTrackingEmailStatus;
      recoveredStatus: OrderTrackingRecoveredStatus;
      expiredAt: string;
      total: number;
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
    emailStatus: OrderTrackingEmailStatus;
    recoveredStatus: OrderTrackingRecoveredStatus;
    phoneNumber: string;
    comboItems: CreateComboItems;
    orderItems: CreateOrderItems;
    expiredAt: string;
    subTotal: number;
    total: number;
    shippingFee: number;
    email: string;
    EmailTrackings: Array<{
      action: EmailTrackingAction;
      AbandonmentReminder: {
        AbandonmentSettings: {
          subjectLine: string;
        };
      };
      createdAt: string;
    }>;
    createdAt: string;
    id: number;
    checkoutDetail: Array<{
      quantity: number;
      price: number;
      photo: string;
    }>;
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

}
