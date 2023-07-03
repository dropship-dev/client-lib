/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateReviewDto } from '../models/CreateReviewDto';
import type { Review } from '../models/Review';
import type { UpdateReviewDto } from '../models/UpdateReviewDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ReviewService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Review Ok
   * @throws ApiError
   */
  public createReview({
    requestBody,
  }: {
    requestBody: CreateReviewDto,
  }): CancelablePromise<Review> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/product/{productId}/review',
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
   * @returns Review Ok
   * @throws ApiError
   */
  public getReview({
    id,
  }: {
    id: number,
  }): CancelablePromise<Review> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}/review/{id}',
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
   * @returns Review Ok
   * @throws ApiError
   */
  public updateReview({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateReviewDto,
  }): CancelablePromise<Review> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/product/{productId}/review/{id}',
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
   * @returns Review Ok
   * @throws ApiError
   */
  public deleteReview({
    id,
  }: {
    id: number,
  }): CancelablePromise<Review> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/product/{productId}/review/{id}',
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
