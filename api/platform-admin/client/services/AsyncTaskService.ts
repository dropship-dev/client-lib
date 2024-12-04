/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_AsyncTaskStatus } from '../models/_36_Enums_AsyncTaskStatus';
import type { _36_Enums_AsyncTaskType } from '../models/_36_Enums_AsyncTaskType';
import type { PrismaJson_AsyncTaskResult } from '../models/PrismaJson_AsyncTaskResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AsyncTaskService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAsyncTask({
    id,
  }: {
    id: string,
  }): CancelablePromise<{
    input: any;
    type: _36_Enums_AsyncTaskType;
    status: _36_Enums_AsyncTaskStatus;
    updatedAt: string;
    createdAt: string;
    id: string;
    result: PrismaJson_AsyncTaskResult;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/async-task/{id}',
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
