/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrderTrackingDto } from '../models/CreateOrderTrackingDto';
import type { UpdateOrderTrackingDto } from '../models/UpdateOrderTrackingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderTrackingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createOrderTracking({
    requestBody,
  }: {
    requestBody: CreateOrderTrackingDto,
  }): CancelablePromise<{
    createdAt: string;
    id: number;
    expiredAt: string;
    token: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/marketing/orders/track',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
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
  public updateOrderTracking({
    trackingId,
    requestBody,
  }: {
    trackingId: number,
    requestBody: UpdateOrderTrackingDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/marketing/orders/{trackingId}/track',
      path: {
        'trackingId': trackingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }

}
