/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WebhookService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns string Ok
   * @throws ApiError
   */
  public handleEventPaypalService({
    agencyId,
    paymentId,
    requestBody,
  }: {
    agencyId: number,
    paymentId: number,
    requestBody: any,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/webhook/paypal-service/{agencyId}/payment/{paymentId}',
      path: {
        'agencyId': agencyId,
        'paymentId': paymentId,
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
