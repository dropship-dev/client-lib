/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CustomDomainStatus } from '../models/_36_Enums_CustomDomainStatus';
import type { _36_Enums_DomainOrigin } from '../models/_36_Enums_DomainOrigin';
import type { _36_Enums_EnvironmentType } from '../models/_36_Enums_EnvironmentType';
import type { _36_Enums_LogoSize } from '../models/_36_Enums_LogoSize';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from '../models/_36_Enums_StoreType';
import type { _36_Enums_ThemePageType } from '../models/_36_Enums_ThemePageType';
import type { ContactFormDto } from '../models/ContactFormDto';
import type { PageNameType } from '../models/PageNameType';
import type { PrismaJson_DomainContactInfo } from '../models/PrismaJson_DomainContactInfo';
import type { PrismaJson_OrderItemInformation } from '../models/PrismaJson_OrderItemInformation';
import type { PrismaJson_ThemeNodes } from '../models/PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from '../models/PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from '../models/PrismaJson_ThemeStyle';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StoreService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public storeSupportsApplePay({
    domain,
  }: {
    domain: string,
  }): CancelablePromise<{
    supportsApplePay: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/support-apple-pay',
      query: {
        'domain': domain,
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
   * @deprecated
   * @returns any Ok
   * @throws ApiError
   */
  public getStoreActiveTheme({
    storeId,
    pageName,
    getFont,
  }: {
    storeId: string,
    pageName?: PageNameType,
    getFont?: boolean,
  }): CancelablePromise<{
    isConversionRate: boolean;
    subDomain: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    shippingPolicy: string;
    termsOfService: string;
    refundPolicy: string;
    privacyPolicy: string;
    timezone: PrismaJson_Timezone;
    type: _36_Enums_StoreType;
    status: _36_Enums_StoreStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    fulfillmentAgencyId: number;
    id: string;
    Currency: {
      isSupported: boolean;
      rateToUSD: number;
      name: string;
      updatedAt: string;
      createdAt: string;
      fulfillmentAgencyId: number;
      id: number;
      symbol: string;
    };
    GoogleTagManager: Array<{
      tag: string;
    }>;
    GoogleAnalytic: Array<{
      measurementId: string;
    }>;
    CustomDomain: Array<{
      isPrimary: boolean;
      contactInfo: PrismaJson_DomainContactInfo;
      renewable: boolean;
      renewalPrice: number;
      purchasePrice: number;
      domainOrigin: _36_Enums_DomainOrigin;
      autoRenew: boolean;
      expirationDate: string;
      target: string;
      domain: string;
      status: _36_Enums_CustomDomainStatus;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
    }>;
    fontPage: Array<any>;
    Klaviyo: {
      publishableKey: string;
    };
    Theme: {
      themeTemplateId: number;
      isActivated: boolean;
      components: any;
      colors: any;
      font: string;
      heroBanner: string;
      logoSize: _36_Enums_LogoSize;
      logo: string;
      nodes: PrismaJson_ThemeNodes;
      style: PrismaJson_ThemeStyle;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
      setting: PrismaJson_ThemeSetting;
      ThemeTemplate: {
        image: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
        link: string;
      };
      ThemePage: Array<{
        parentThemePageId: number;
        themeId: number;
        themeLibraryId: number;
        content: string;
        type: _36_Enums_ThemePageType;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
      }>;
    };
    Payment: Array<{
      isConnectPSSFF: boolean;
      environment: _36_Enums_EnvironmentType;
      UIVersion: number;
      domainAssociation: string;
      BNcode: string;
      isPlatform: boolean;
      isShowCompanyAddress: boolean;
      companyAddress: string;
      companyPhone: string;
      companyName: string;
      merchantId: string;
      salt: string;
      publishableKey: string;
      type: _36_Enums_PaymentType;
      email: string;
      updatedAt: string;
      createdAt: string;
      id: number;
      ApplePayConfig: Array<{
        domain: string;
      }>;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/active-theme',
      path: {
        'storeId': storeId,
      },
      query: {
        'pageName': pageName,
        'getFont': getFont,
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
  public getStoreActiveThemeV2({
    storeId,
    getFont = true,
    pageName,
    productPermalink,
  }: {
    storeId: string,
    getFont?: boolean,
    pageName?: PageNameType,
    productPermalink?: string,
  }): CancelablePromise<{
    isConversionRate: boolean;
    subDomain: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    shippingPolicy: string;
    termsOfService: string;
    refundPolicy: string;
    privacyPolicy: string;
    timezone: PrismaJson_Timezone;
    type: _36_Enums_StoreType;
    status: _36_Enums_StoreStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    fulfillmentAgencyId: number;
    id: string;
    Currency: {
      isSupported: boolean;
      rateToUSD: number;
      name: string;
      updatedAt: string;
      createdAt: string;
      fulfillmentAgencyId: number;
      id: number;
      symbol: string;
    };
    GoogleTagManager: Array<{
      tag: string;
    }>;
    GoogleAnalytic: Array<{
      measurementId: string;
    }>;
    CustomDomain: Array<{
      isPrimary: boolean;
      contactInfo: PrismaJson_DomainContactInfo;
      renewable: boolean;
      renewalPrice: number;
      purchasePrice: number;
      domainOrigin: _36_Enums_DomainOrigin;
      autoRenew: boolean;
      expirationDate: string;
      target: string;
      domain: string;
      status: _36_Enums_CustomDomainStatus;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
    }>;
    fontPage: Array<any>;
    Klaviyo: {
      publishableKey: string;
    };
    Theme: {
      themeTemplateId: number;
      isActivated: boolean;
      components: any;
      colors: any;
      font: string;
      heroBanner: string;
      logoSize: _36_Enums_LogoSize;
      logo: string;
      nodes: PrismaJson_ThemeNodes;
      style: PrismaJson_ThemeStyle;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
      setting: PrismaJson_ThemeSetting;
      ThemeTemplate: {
        image: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
        link: string;
      };
      ThemePage: Array<{
        parentThemePageId: number;
        themeId: number;
        themeLibraryId: number;
        content: string;
        type: _36_Enums_ThemePageType;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
      }>;
    };
    Payment: Array<{
      isConnectPSSFF: boolean;
      environment: _36_Enums_EnvironmentType;
      UIVersion: number;
      BNcode: string;
      isPlatform: boolean;
      isShowCompanyAddress: boolean;
      companyAddress: string;
      companyPhone: string;
      companyName: string;
      merchantId: string;
      salt: string;
      publishableKey: string;
      type: _36_Enums_PaymentType;
      email: string;
      updatedAt: string;
      createdAt: string;
      id: number;
      ApplePayConfig: Array<{
        domain: string;
      }>;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/active-theme-v2',
      path: {
        'storeId': storeId,
      },
      query: {
        'getFont': getFont,
        'pageName': pageName,
        'productPermalink': productPermalink,
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
  public getStorePaymentMethod({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<{
    isShowCompanyAddress: boolean;
    companyAddress: string;
    companyPhone: string;
    companyName: string;
    publishableKey: string;
    type: _36_Enums_PaymentType;
    email: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/payment-method',
      path: {
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
   * @returns any Ok
   * @throws ApiError
   */
  public getStorePaymentMethodClientToken({
    storeId,
    clientId,
  }: {
    storeId: string,
    clientId?: string,
  }): CancelablePromise<{
    clientToken: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/payment-method/client-token',
      path: {
        'storeId': storeId,
      },
      query: {
        'clientId': clientId,
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
  public contactStore({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: ContactFormDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/contact',
      path: {
        'storeId': storeId,
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
  public getOrderTracking({
    storeId,
    email,
    orderId,
  }: {
    storeId: string,
    email: string,
    orderId?: string,
  }): CancelablePromise<Array<{
    id: string;
    OrderItem: Array<{
      information: PrismaJson_OrderItemInformation;
      carrier: string;
      tracking: string;
      quantity: number;
      price: number;
      VariantCombo: {
        photo: string;
        name: string;
      };
      ProductVariant: {
        displayName: string;
        photo: string;
        name: string;
      };
      Product: {
        name: string;
        id: number;
      };
    }>;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/tracking',
      path: {
        'storeId': storeId,
      },
      query: {
        'email': email,
        'orderId': orderId,
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
  public getDebtPayment({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    balanceDebt: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/debt-payment',
      path: {
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
   * @returns any Ok
   * @throws ApiError
   */
  public getWarningStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    warning: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/warning',
      path: {
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
  public toggleWarningStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/store/{storeId}/warning',
      path: {
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
}
