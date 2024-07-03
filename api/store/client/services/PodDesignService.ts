/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PodDesignService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns string Ok
   * @throws ApiError
   */
  public getPrintAreaByStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/design/{storeId}/print-area',
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

}
