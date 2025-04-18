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
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_OrderHistoryTracking } from '../models/PrismaJson_OrderHistoryTracking';
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
        isRollback: boolean;
        total: number;
        note: string;
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
            deleted: boolean;
            platformProductId: number;
            isActive: boolean;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
          };
          Product: {
            name: string;
            id: number;
          };
        } & {
          podDesignVariantId: number;
          platformVariantId: number;
          margin: PrismaJson_MarginInfo;
          minSellingPrice: number;
          compareAtPrice: number;
          productId: number;
          cost: PrismaJson_CostInfo;
          supplierPrice: number;
          price: number;
          photo: string;
          isEnable: boolean;
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
        orderRefundId: string;
        variantComboId: number;
        productVariantId: number;
        productId: number;
        syncTrackingStatus: _36_Enums_SyncTrackingStatus;
        carrier: string;
        tracking: string;
        latestQuantity: number;
        platformPrice: number;
        quantity: number;
        priceUSD: number;
        price: number;
        orderId: string;
        currencyId: number;
        status: _36_Enums_FulfillmentStatus;
        updatedAt: string;
        createdAt: string;
        id: string;
      })>;
      Transaction: Array<{
        isRollback: boolean;
        refundIdGateway: string;
        transactionDetails: PrismaJson_TransactionDetails;
        notes: string;
        requestPayoutId: string;
        disputeFee: number;
        fee: number;
        amount: number;
        idTransaction: string;
        lastBalance: number;
        orderId: string;
        walletId: string;
        photos: PrismaJson_Photos;
        paymentMethod: PrismaJson_TransactionPaymentMethod;
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
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        othersFee: number;
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
      };
    } & {
      disputeStatus: _36_Enums_OrderDisputeStatus;
      isHandleEvents: boolean;
      fingerPrint: string;
      paymentFee: number;
      paymentSource: string;
      timezoneLocalBrowser: string;
      fulfillmentCost: number;
      fulfillmentStatus: _36_Enums_FulfillmentStatus;
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
      lastBalance: number;
      discountShippingFee: number;
      noItems: number;
      tax: number;
      profitFulfillAdmin: number;
      deductedProfit: number;
      profit: number;
      subTotal: number;
      totalUSD: number;
      total: number;
      note: string;
      historyTracking: PrismaJson_OrderHistoryTracking;
      utmLink: string;
      additionalInfo: any;
      billingInfo: PrismaJson_BillingInfo;
      province: string;
      address2: string;
      address1: string;
      domain: string;
      isDeductedProfit: boolean;
      serviceFee: number;
      fulfillmentShippingCost: number;
      discount: number;
      paymentId: number;
      merchantId: string;
      currencyId: number;
      shippingFee: number;
      othersFee: number;
      country: string;
      zipCode: string;
      city: string;
      platformFee: number;
      status: _36_Enums_OrderStatus;
      phone: string;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: string;
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
