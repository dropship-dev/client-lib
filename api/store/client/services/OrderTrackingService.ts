/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrderTrackingDto } from '../models/CreateOrderTrackingDto';
import type { Prisma_NullableDateTimeFieldUpdateOperationsInput } from '../models/Prisma_NullableDateTimeFieldUpdateOperationsInput';
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
    token: string;
    createdAt: string;
    id: number;
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateOrderTracking({
    trackingId,
    requestBody,
  }: {
    trackingId: number,
    requestBody: UpdateOrderTrackingDto,
  }): CancelablePromise<{
    expiredAt: (string | Prisma_NullableDateTimeFieldUpdateOperationsInput);
    token: string;
    id: number;
  }> {
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
