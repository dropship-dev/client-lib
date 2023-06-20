/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUploadDto } from '../models/CreateUploadDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UploadService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createUpload({
    requestBody,
  }: {
    requestBody: CreateUploadDto,
  }): CancelablePromise<{
    url: string;
    signedUrl: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/upload',
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
