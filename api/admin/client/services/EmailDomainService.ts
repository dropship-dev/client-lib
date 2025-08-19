/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_EmailDomainStatus } from '../models/_36_Enums_EmailDomainStatus';
import type { AddEmailUsernameDto } from '../models/AddEmailUsernameDto';
import type { CreateEmailDomainDto } from '../models/CreateEmailDomainDto';
import type { PrismaJson_EmailDomainRecords } from '../models/PrismaJson_EmailDomainRecords';
import type { PrismaJson_TxtVerification } from '../models/PrismaJson_TxtVerification';
import type { SendTestEmailDto } from '../models/SendTestEmailDto';
import type { UpdateEmailFlowAbandonedCheckoutDto } from '../models/UpdateEmailFlowAbandonedCheckoutDto';
import type { UpdateEmailUsernameDto } from '../models/UpdateEmailUsernameDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmailDomainService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createEmailDomain({
    requestBody,
  }: {
    requestBody: CreateEmailDomainDto,
  }): CancelablePromise<{
    resendId: number;
    txtVerification: PrismaJson_TxtVerification;
    providerDomainId: string;
    domain: string;
    isDefault: boolean;
    status: _36_Enums_EmailDomainStatus;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    fulfillmentAgencyId: number;
    id: number;
    records: Array<({
      priority?: number;
      value?: string;
      status?: string;
      type?: string;
      name?: string;
      record?: string;
    } | {
      value: string;
      records: string;
      name: string;
      ttl: string;
      type: string;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/email-domain',
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
  public getListEmailDomain({
    storeId,
    fulfillmentAgencyId,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<Array<{
    txtVerification: PrismaJson_TxtVerification;
    domain: string;
    status: _36_Enums_EmailDomainStatus;
    id: number;
    EmailUsername: Array<{
      isPayment: boolean;
      isAbandonmentSettings: boolean;
      username: string;
      email: string;
      id: number;
    }>;
    isPayment: boolean;
    isAbandonmentSettings: boolean;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/email-domain',
      query: {
        'storeId': storeId,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getListEmailUsername({
    storeId,
    fulfillmentAgencyId,
    keyword,
    isActiveEmailDomain,
    isDefaultEmail,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
    keyword?: string,
    isActiveEmailDomain?: boolean,
    isDefaultEmail?: boolean,
  }): CancelablePromise<Array<{
    emailDomainId: number;
    username: string;
    email: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    fulfillmentAgencyId: number;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/email-domain/username',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'keyword': keyword,
        'isActiveEmailDomain': isActiveEmailDomain,
        'isDefaultEmail': isDefaultEmail,
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
  public getListEmailFlowByStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    abandonedCheckout: {
      fromName: string;
      replyToEmail: string;
      email: string;
    };
    payment: Array<{
      fromName: string;
      replyToEmail: string;
      email: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/email-domain/email-flow',
      query: {
        'storeId': storeId,
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
   * @returns string Ok
   * @throws ApiError
   */
  public sendTestEmail({
    requestBody,
    storeId,
    fulfillmentAgencyId,
  }: {
    requestBody: SendTestEmailDto,
    storeId?: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/email-domain/test-email',
      query: {
        'storeId': storeId,
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
  public updateEmailFlowAbandonedCheckout({
    requestBody,
  }: {
    requestBody: UpdateEmailFlowAbandonedCheckoutDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/email-domain/abandoned-checkout',
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
  public deleteEmailDomain({
    id,
    storeId,
    fulfillmentAgencyId,
  }: {
    id: number,
    storeId?: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/email-domain/{id}',
      path: {
        'id': id,
      },
      query: {
        'storeId': storeId,
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
   * @returns any Ok
   * @throws ApiError
   */
  public verifyEmailDomain({
    id,
    storeId,
    fulfillmentAgencyId,
  }: {
    id: number,
    storeId?: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<{
    resendId: number;
    txtVerification: PrismaJson_TxtVerification;
    records: PrismaJson_EmailDomainRecords;
    providerDomainId: string;
    domain: string;
    isDefault: boolean;
    status: _36_Enums_EmailDomainStatus;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/email-domain/{id}/verify',
      path: {
        'id': id,
      },
      query: {
        'storeId': storeId,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getRecordsEmailDomain({
    id,
    storeId,
    fulfillmentAgencyId,
  }: {
    id: number,
    storeId?: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<{
    txtVerification: PrismaJson_TxtVerification;
    id: number;
    records: Array<({
      priority?: number;
      value?: string;
      status?: string;
      type?: string;
      name?: string;
      record?: string;
    } | {
      value: string;
      records: string;
      name: string;
      ttl: string;
      type: string;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/email-domain/{id}/records',
      path: {
        'id': id,
      },
      query: {
        'storeId': storeId,
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
   * @returns any Ok
   * @throws ApiError
   */
  public addEmailUsername({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: AddEmailUsernameDto,
  }): CancelablePromise<{
    emailDomainId: number;
    username: string;
    email: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/email-domain/{id}/username',
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
   * @returns string Ok
   * @throws ApiError
   */
  public updateEmailUsername({
    domainId,
    emailUsernameId,
    requestBody,
  }: {
    domainId: number,
    emailUsernameId: number,
    requestBody: UpdateEmailUsernameDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/email-domain/{domainId}/username/{emailUsernameId}',
      path: {
        'domainId': domainId,
        'emailUsernameId': emailUsernameId,
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
  public deleteEmailUsername({
    emailUsernameId,
    storeId,
    fulfillmentAgencyId,
  }: {
    emailUsernameId: number,
    storeId?: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/email-domain/{domainId}/username/{emailUsernameId}',
      path: {
        'emailUsernameId': emailUsernameId,
      },
      query: {
        'storeId': storeId,
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
}
