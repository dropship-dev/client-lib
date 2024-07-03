/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTechniqueDto } from '../models/CreateTechniqueDto';
import type { PodTechnique } from '../models/PodTechnique';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PodTechniqueService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns PodTechnique Ok
   * @throws ApiError
   */
  public createTechnique({
    requestBody,
  }: {
    requestBody: CreateTechniqueDto,
  }): CancelablePromise<PodTechnique> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pod/technique',
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
  public getListTechnique(): CancelablePromise<Array<{
    name: string;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/technique',
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
