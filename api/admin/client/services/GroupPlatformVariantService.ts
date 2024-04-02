/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddPlatformVariantToGroupDto } from '../models/AddPlatformVariantToGroupDto';
import type { CreateGroupPlatformVariantsDto } from '../models/CreateGroupPlatformVariantsDto';
import type { GroupPlatformVariant } from '../models/GroupPlatformVariant';
import type { PlatformCostInfo } from '../models/PlatformCostInfo';
import type { UpdateGroupPlatformVariantsDto } from '../models/UpdateGroupPlatformVariantsDto';
import type { VariantOptionValues } from '../models/VariantOptionValues';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GroupPlatformVariantService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns GroupPlatformVariant Ok
   * @throws ApiError
   */
  public createGroupPlatformVariant({
    fulfillmentAgencyId,
    platformProductId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    requestBody: CreateGroupPlatformVariantsDto,
  }): CancelablePromise<GroupPlatformVariant> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/platform-product/{platformProductId}/group',
      path: {
        'platformProductId': platformProductId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public getGroupPlatformVariant({
    fulfillmentAgencyId,
    platformProductId,
    groupPlatformVariantId,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    groupPlatformVariantId: number,
  }): CancelablePromise<{
    cost: PlatformCostInfo;
    platformProductId: number;
    name: string;
    PlatformVariant: Array<{
      photo: string;
      variantOption: VariantOptionValues;
      SKU: string;
      name: string;
      id: number;
    }>;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform-product/{platformProductId}/group/{groupPlatformVariantId}',
      path: {
        'platformProductId': platformProductId,
        'groupPlatformVariantId': groupPlatformVariantId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns void
   * @throws ApiError
   */
  public deleteGroupPlatformVariant({
    fulfillmentAgencyId,
    platformProductId,
    groupPlatformVariantId,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    groupPlatformVariantId: number,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform-product/{platformProductId}/group/{groupPlatformVariantId}',
      path: {
        'platformProductId': platformProductId,
        'groupPlatformVariantId': groupPlatformVariantId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns GroupPlatformVariant Ok
   * @throws ApiError
   */
  public updateGroupPlatformVariant({
    fulfillmentAgencyId,
    platformProductId,
    groupPlatformVariantId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    groupPlatformVariantId: number,
    requestBody: UpdateGroupPlatformVariantsDto,
  }): CancelablePromise<GroupPlatformVariant> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}/group/{groupPlatformVariantId}',
      path: {
        'platformProductId': platformProductId,
        'groupPlatformVariantId': groupPlatformVariantId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns string Ok
   * @throws ApiError
   */
  public addPlatformVariantToGroupDto({
    fulfillmentAgencyId,
    platformProductId,
    groupPlatformVariantId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    groupPlatformVariantId: number,
    requestBody: AddPlatformVariantToGroupDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/platform-product/{platformProductId}/group/{groupPlatformVariantId}/variants',
      path: {
        'platformProductId': platformProductId,
        'groupPlatformVariantId': groupPlatformVariantId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
