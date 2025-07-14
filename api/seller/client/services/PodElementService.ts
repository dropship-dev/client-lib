/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateElementDto } from '../models/CreateElementDto';
import type { IPageDetail } from '../models/IPageDetail';
import type { UpdateElementDto } from '../models/UpdateElementDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PodElementService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createElement({
    requestBody,
  }: {
    requestBody: CreateElementDto,
  }): CancelablePromise<{
    message: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pod/element',
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
  public getAllElement({
    page,
    limit,
  }: {
    page?: number,
    limit?: number,
  }): CancelablePromise<{
    data: Array<{
      name: string;
      id: number;
      PodElement: Array<{
        url: string;
        name: string;
      }>;
      order: number;
    }>;
    pageDetail: IPageDetail;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/element',
      query: {
        'page': page,
        'limit': limit,
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateElement({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateElementDto,
  }): CancelablePromise<{
    podElementTypeId: number;
    url: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/pod/element/{id}',
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
   * @returns any Ok
   * @throws ApiError
   */
  public deleteElement({
    id,
  }: {
    id: number,
  }): CancelablePromise<{
    podElementTypeId: number;
    url: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/pod/element/{id}',
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
