/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNotificationDto } from '../models/CreateNotificationDto';
import type { Notification } from '../models/Notification';
import type { NotificationData } from '../models/NotificationData';
import type { NotificationType } from '../models/NotificationType';
import type { SubscribeTopicDto } from '../models/SubscribeTopicDto';
import type { UnsubscribeTopicDto } from '../models/UnsubscribeTopicDto';
import type { UpdateNotificationDto } from '../models/UpdateNotificationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotificationService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns string Ok
   * @throws ApiError
   */
  public subscribeTopic({
    requestBody,
  }: {
    requestBody: SubscribeTopicDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/notification/subscribe-topic',
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
  public unsubscribeTopic({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UnsubscribeTopicDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/notification/unsubscribe-topic',
      query: {
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
    data: Array<NotificationData>;
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
   * @returns NotificationData Ok
   * @throws ApiError
   */
  public getNotification({
    id,
  }: {
    id: number,
  }): CancelablePromise<NotificationData> {
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

  /**
   * @returns string Ok
   * @throws ApiError
   */
  public updateReadNotification({
    id,
  }: {
    id: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/notification/{id}/read',
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
