/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StatusTemplate } from './StatusTemplate';

export type GetAllTemplateDto = {
  search?: string;
  sort?: GetAllTemplateDto.sort;
  status?: Array<StatusTemplate>;
  podProductTypeId?: number;
  podCategoryId?: number;
  storeId?: string;
  fulfillmentAgencyId?: number;
  isFavorite?: boolean;
  page?: number;
  limit?: number;
};

export namespace GetAllTemplateDto {

  export enum sort {
    ASC = 'ASC',
    DESC = 'DESC',
  }


}

