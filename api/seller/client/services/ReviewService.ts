/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateReviewDto } from '../models/CreateReviewDto';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
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
    storeId,
    productId,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    requestBody: CreateReviewDto,
  }): CancelablePromise<Review> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/product/{productId}/review',
      path: {
        'storeId': storeId,
        'productId': productId,
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
  public getAllReview({
    storeId,
    productId,
  }: {
    storeId: string,
    productId: number,
  }): CancelablePromise<Array<{
    comment: string;
    rating: number;
    productId: number;
    photos: PrismaJson_Photos;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}/review',
      path: {
        'storeId': storeId,
        'productId': productId,
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
  public getReview({
    storeId,
    productId,
    id,
  }: {
    storeId: string,
    productId: number,
    id: number,
  }): CancelablePromise<{
    comment: string;
    rating: number;
    productId: number;
    photos: PrismaJson_Photos;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}/review/{id}',
      path: {
        'storeId': storeId,
        'productId': productId,
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateReview({
    storeId,
    productId,
    id,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    id: number,
    requestBody: UpdateReviewDto,
  }): CancelablePromise<{
    comment: string;
    rating: number;
    productId: number;
    photos: PrismaJson_Photos;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/product/{productId}/review/{id}',
      path: {
        'storeId': storeId,
        'productId': productId,
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
  public deleteReview({
    storeId,
    productId,
    id,
  }: {
    storeId: string,
    productId: number,
    id: number,
  }): CancelablePromise<{
    comment: string;
    rating: number;
    productId: number;
    photos: PrismaJson_Photos;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/product/{productId}/review/{id}',
      path: {
        'storeId': storeId,
        'productId': productId,
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
