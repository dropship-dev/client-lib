/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApproveRequestSourcingDto } from '../models/ApproveRequestSourcingDto';
import type { RejectRequestSourcingDto } from '../models/RejectRequestSourcingDto';
import type { RequestSourcing } from '../models/RequestSourcing';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RequestSourcingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns RequestSourcing Ok
   * @throws ApiError
   */
  public approveRequestSourcing({
    storeId,
    id,
    requestBody,
  }: {
    storeId: string,
    id: number,
    requestBody: ApproveRequestSourcingDto,
  }): CancelablePromise<RequestSourcing> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/request-sourcing/{id}/approve',
      path: {
        'storeId': storeId,
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
   * @returns RequestSourcing Ok
   * @throws ApiError
   */
  public rejectRequestSourcing({
    storeId,
    id,
    requestBody,
  }: {
    storeId: string,
    id: number,
    requestBody: RejectRequestSourcingDto,
  }): CancelablePromise<RequestSourcing> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/request-sourcing/{id}/reject',
      path: {
        'storeId': storeId,
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
