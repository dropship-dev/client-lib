/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FulfillmentAgencyService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAgencyByEmail({
    email,
  }: {
    email: string,
  }): CancelablePromise<{
    avatar: string;
    nameAgency: string;
    email: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency/get-agency-by-email',
      query: {
        'email': email,
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
