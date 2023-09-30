/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNotificationDto } from '../models/CreateNotificationDto';
import type { Notification } from '../models/Notification';
import type { NotificationType } from '../models/NotificationType';
import type { UpdateNotificationDto } from '../models/UpdateNotificationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotificationService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Notification Ok
   * @throws ApiError
   */
  public createNotification({
    requestBody,
  }: {
    requestBody: CreateNotificationDto,
  }): CancelablePromise<Notification> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/notification',
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
  public getAllNotification({
    fulfillmentAgencyId,
    storeId,
    type,
    pageSize = 20,
    nextPageIndex,
  }: {
    fulfillmentAgencyId?: number,
    storeId?: string,
    type?: Array<NotificationType>,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<Notification>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/notification',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'storeId': storeId,
        'type': type,
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
   * @returns Notification Ok
   * @throws ApiError
   */
  public getNotification({
    id,
  }: {
    id: number,
  }): CancelablePromise<Notification> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/notification/{id}',
      path: {
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
   * @returns Notification Ok
   * @throws ApiError
   */
  public updateNotification({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateNotificationDto,
  }): CancelablePromise<Notification> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/notification/{id}',
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
   * @returns Notification Ok
   * @throws ApiError
   */
  public deleteNotification({
    id,
  }: {
    id: number,
  }): CancelablePromise<Notification> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/notification/{id}',
      path: {
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

}
