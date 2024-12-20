/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetListCategoryByCatalog } from '../models/GetListCategoryByCatalog';
import type { GetListCategoryByCategory } from '../models/GetListCategoryByCategory';
import type { LayoutCategory } from '../models/LayoutCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PodCategoryService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getListCategory({
    fulfillmentAgencyId,
    storeId,
    search,
    startDate,
    endDate,
    layout,
  }: {
    fulfillmentAgencyId?: number,
    storeId?: string,
    search?: string,
    startDate?: string,
    endDate?: string,
    layout?: LayoutCategory,
  }): CancelablePromise<(Array<GetListCategoryByCatalog> | Array<GetListCategoryByCategory>)> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/category',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'storeId': storeId,
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'layout': layout,
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
