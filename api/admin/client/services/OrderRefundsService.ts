/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FulfillmentStatus } from '../models/_36_Enums_FulfillmentStatus';
import type { _36_Enums_OrderDisputeStatus } from '../models/_36_Enums_OrderDisputeStatus';
import type { _36_Enums_OrderStatus } from '../models/_36_Enums_OrderStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from '../models/_36_Enums_StoreType';
import type { _36_Enums_SyncTrackingStatus } from '../models/_36_Enums_SyncTrackingStatus';
import type { _36_Enums_TransactionStatus } from '../models/_36_Enums_TransactionStatus';
import type { _36_Enums_TransactionType } from '../models/_36_Enums_TransactionType';
import type { PrismaJson_BillingInfo } from '../models/PrismaJson_BillingInfo';
import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_CustomVariantOptionValues } from '../models/PrismaJson_CustomVariantOptionValues';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_OrderItemInformation } from '../models/PrismaJson_OrderItemInformation';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlatformCostInfo } from '../models/PrismaJson_PlatformCostInfo';
import type { PrismaJson_RefundOrderItems } from '../models/PrismaJson_RefundOrderItems';
import type { PrismaJson_SyncBalanceAmount } from '../models/PrismaJson_SyncBalanceAmount';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { PrismaJson_TransactionDetails } from '../models/PrismaJson_TransactionDetails';
import type { PrismaJson_TransactionPaymentMethod } from '../models/PrismaJson_TransactionPaymentMethod';
import type { PrismaJson_VariantComboItems } from '../models/PrismaJson_VariantComboItems';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { UpdateOrderRefundDto } from '../models/UpdateOrderRefundDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrderRefundsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public updateHistoryOrderRefund({
    id,
    requestBody,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: string,
    requestBody: UpdateOrderRefundDto,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<{
    Order: ({
      OrderRefund: Array<{
        historyRefundOrder: PrismaJson_RefundOrderItems;
        paymentGateId: number;
        total: number;
        note: string;
        isRollback: boolean;
        orderId: string;
        type: string;
        updatedAt: string;
        createdAt: string;
        id: string;
      }>;
      OrderItem: Array<({
        VariantCombo: ({
          Product: {
            name: string;
            id: number;
          };
        } & {
          items: PrismaJson_VariantComboItems;
          minSellingPrice: number;
          compareAtPrice: number;
          productId: number;
          supplierCost: number;
          price: number;
          photo: string;
          isEnable: boolean;
          SKU: string;
          isActive: boolean;
          name: string;
          updatedAt: string;
          createdAt: string;
          isDeleted: boolean;
          id: number;
        });
        ProductVariant: ({
          Product: {
            name: string;
            id: number;
          };
          PlatformVariant: {
            fulfillmentPlatformVariantId: string;
            groupPlatformVariantId: number;
            cost: PrismaJson_PlatformCostInfo;
            supplierPrice: number;
            price: number;
            photo: string;
            isEnable: boolean;
            variantOption: PrismaJson_VariantOptionValues;
            SKU: string;
            platformProductId: number;
            deleted: boolean;
            isActive: boolean;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
          };
        } & {
          podDesignVariantId: number;
          platformVariantId: number;
          margin: PrismaJson_MarginInfo;
          minSellingPrice: number;
          compareAtPrice: number;
          displayName: string;
          productId: number;
          cost: PrismaJson_CostInfo;
          supplierPrice: number;
          price: number;
          photo: string;
          isEnable: boolean;
          customVariantOption: PrismaJson_CustomVariantOptionValues;
          variantOption: PrismaJson_VariantOptionValues;
          SKU: string;
          deleted: boolean;
          isActive: boolean;
          name: string;
          updatedAt: string;
          createdAt: string;
          id: number;
        });
      } & {
        information: PrismaJson_OrderItemInformation;
        orderRefundId: string;
        variantComboId: number;
        productVariantId: number;
        syncTrackingStatus: _36_Enums_SyncTrackingStatus;
        carrier: string;
        tracking: string;
        latestQuantity: number;
        platformPrice: number;
        priceUSD: number;
        quantity: number;
        productId: number;
        price: number;
        orderId: string;
        currencyId: number;
        status: _36_Enums_FulfillmentStatus;
        updatedAt: string;
        createdAt: string;
        id: string;
      })>;
      Transaction: Array<{
        requestPayoutId: string;
        isRollback: boolean;
        refundIdGateway: string;
        transactionDetails: PrismaJson_TransactionDetails;
        notes: string;
        disputeFee: number;
        lastBalance: number;
        fee: number;
        amount: number;
        idTransaction: string;
        orderId: string;
        photos: PrismaJson_Photos;
        paymentMethod: PrismaJson_TransactionPaymentMethod;
        walletId: string;
        type: _36_Enums_TransactionType;
        status: _36_Enums_TransactionStatus;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
      }>;
      Store: {
        isConversionRate: boolean;
        stripeDefaultPaymentMethodId: string;
        stripeCustomerId: string;
        warning: boolean;
        invitedDate: string;
        invitedById: number;
        currencyId: number;
        maxUsers: number;
        balance: number;
        referralCode: string;
        defaultBankAccount: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        primaryDomain: string;
        subDomain: string;
        pageName: string;
        closedAt: string;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        avatar: string;
        othersFee: number;
        shippingPolicy: string;
        termsOfService: string;
        refundPolicy: string;
        privacyPolicy: string;
        timezone: PrismaJson_Timezone;
        taxFeatureEnabled: boolean;
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
      };
    } & {
      disputeStatus: _36_Enums_OrderDisputeStatus;
      isHandleEvents: boolean;
      fingerPrint: string;
      taxTransactionId: string;
      customerLocale: string;
      currencyCustomerCode: string;
      paymentFee: number;
      paymentSource: string;
      timezoneLocalBrowser: string;
      fulfillmentCost: number;
      fulfillmentStatus: _36_Enums_FulfillmentStatus;
      isSyncTax: boolean;
      isSyncBalance: PrismaJson_SyncBalanceAmount;
      retentionRate: number;
      payoutIn: string;
      holdIn: string;
      latestNoItems: number;
      latestSubTotal: number;
      latestTotal: number;
      gatewayTransactionId: string;
      gatewayOrderId: string;
      supplierCost: number;
      discountShippingFee: number;
      noItems: number;
      totalAfterTax: number;
      taxable: boolean;
      taxNote: string;
      taxRate: number;
      tax: number;
      profitFulfillAdmin: number;
      deductedProfit: number;
      profit: number;
      subTotal: number;
      totalUSD: number;
      total: number;
      note: string;
      utmLink: string;
      historyTracking: any;
      additionalInfo: any;
      billingInfo: PrismaJson_BillingInfo;
      taxId: string;
      province: string;
      address2: string;
      address1: string;
      lastBalance: number;
      domain: string;
      paymentId: number;
      merchantId: string;
      currencyId: number;
      shippingFee: number;
      country: string;
      zipCode: string;
      city: string;
      isDeductedProfit: boolean;
      serviceFee: number;
      othersFee: number;
      platformFee: number;
      status: _36_Enums_OrderStatus;
      phone: string;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: string;
      fulfillmentShippingCost: number;
      discount: number;
    });
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/order-refunds/{id}',
      path: {
        'id': id,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
}
