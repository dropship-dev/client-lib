import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_EnvironmentType } from '../models/_36_Enums_EnvironmentType';
import type { _36_Enums_FraudDetectionStatusType } from '../models/_36_Enums_FraudDetectionStatusType';
import type { _36_Enums_FraudDetectionType } from '../models/_36_Enums_FraudDetectionType';
import type { _36_Enums_FulfillmentAgencyStatus } from '../models/_36_Enums_FulfillmentAgencyStatus';
import type { _36_Enums_FulfillmentAgencyType } from '../models/_36_Enums_FulfillmentAgencyType';
import type { _36_Enums_FulfillmentStatus } from '../models/_36_Enums_FulfillmentStatus';
import type { _36_Enums_OrderDisputeStatus } from '../models/_36_Enums_OrderDisputeStatus';
import type { _36_Enums_OrderStatus } from '../models/_36_Enums_OrderStatus';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_StoreRole } from '../models/_36_Enums_StoreRole';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from '../models/_36_Enums_StoreType';
import type { _36_Enums_SyncTrackingStatus } from '../models/_36_Enums_SyncTrackingStatus';
import type { _36_Enums_TransactionStatus } from '../models/_36_Enums_TransactionStatus';
import type { _36_Enums_TransactionType } from '../models/_36_Enums_TransactionType';
import type { ExportOrderResponseDto } from '../models/ExportOrderResponseDto';
import type { FraudStatusType } from '../models/FraudStatusType';
import type { GetAllOrderResult } from '../models/GetAllOrderResult';
import type { GetOrderResult } from '../models/GetOrderResult';
import type { ManualFraudDetectionDto } from '../models/ManualFraudDetectionDto';
import type { PrismaJson_BillingInfo } from '../models/PrismaJson_BillingInfo';
import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlatformCostInfo } from '../models/PrismaJson_PlatformCostInfo';
import type { PrismaJson_RefundOrderItems } from '../models/PrismaJson_RefundOrderItems';
import type { PrismaJson_SyncBalanceAmount } from '../models/PrismaJson_SyncBalanceAmount';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { PrismaJson_TransactionDetails } from '../models/PrismaJson_TransactionDetails';
import type { PrismaJson_TransactionPaymentMethod } from '../models/PrismaJson_TransactionPaymentMethod';
import type { PrismaJson_TypeOfFraudService } from '../models/PrismaJson_TypeOfFraudService';
import type { PrismaJson_UnavailableBalance } from '../models/PrismaJson_UnavailableBalance';
import type { PrismaJson_VariantComboItems } from '../models/PrismaJson_VariantComboItems';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { RefundOrderDto } from '../models/RefundOrderDto';
import type { UpdateFulFillmentStatusResp } from '../models/UpdateFulFillmentStatusResp';
import type { UpdateOrderStatusDto } from '../models/UpdateOrderStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class OrderService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStoreOrder({ storeId, pageSize, nextPageIndex, paymentStatus, fulfillmentStatus, disputeStatus, search, productName, startDate, endDate, startTotal, endTotal, gateway, fraudStatus, }: {
        /**
         * filter by store ID
         */
        storeId: string;
        pageSize?: number;
        nextPageIndex?: string;
        /**
         * filter by payment status
         */
        paymentStatus?: Array<_36_Enums_TransactionStatus>;
        /**
         * filter by fulfillment status
         */
        fulfillmentStatus?: Array<_36_Enums_FulfillmentStatus>;
        disputeStatus?: Array<_36_Enums_OrderDisputeStatus>;
        search?: string;
        /**
         * filter by product name (product name contain)
         */
        productName?: string;
        startDate?: string;
        endDate?: string;
        startTotal?: number;
        endTotal?: number;
        gateway?: Array<number>;
        fraudStatus?: Array<FraudStatusType>;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<{
            domain: string;
            paymentId: number;
            gatewayTransactionId: string;
            fulfillmentStatus: _36_Enums_FulfillmentStatus;
            disputeStatus: _36_Enums_OrderDisputeStatus;
            status: _36_Enums_OrderStatus;
            email: string;
            name: string;
            total: number;
            latestTotal: number;
            createdAt: string;
            storeId: string;
            id: string;
            OrderItem: Array<{
                tracking: string;
                orderId: string;
            }>;
            Transaction: Array<{
                orderId: string;
                status: _36_Enums_TransactionStatus;
            }>;
            Payment: {
                type: _36_Enums_PaymentType;
                email: string;
                name: string;
                id: number;
            };
            Store: {
                primaryDomain: string;
                name: string;
                id: string;
            };
        }>;
    }>;
    /**
     * @returns ExportOrderResponseDto Ok
     * @throws ApiError
     */
    exportAllOrders({ fulfillmentAgencyId, storeId, paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }: {
        fulfillmentAgencyId: number;
        storeId?: string;
        paymentStatus?: _36_Enums_TransactionStatus;
        fulfillmentStatus?: Array<_36_Enums_FulfillmentStatus>;
        email?: string;
        productName?: string;
        startDate?: string;
        endDate?: string;
        startTotal?: number;
        endTotal?: number;
    }): CancelablePromise<Array<ExportOrderResponseDto>>;
    /**
     * @returns UpdateFulFillmentStatusResp Ok
     * @throws ApiError
     */
    updateFulfillmentStatus({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: UpdateOrderStatusDto;
    }): CancelablePromise<UpdateFulFillmentStatusResp>;
    /**
     * @returns GetOrderResult Ok
     * @throws ApiError
     */
    getOrder({ fulfillmentAgencyId, id, }: {
        fulfillmentAgencyId: number;
        id: string;
    }): CancelablePromise<GetOrderResult>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllOrders({ fulfillmentAgencyId, pageSize, nextPageIndex, storeId, paymentStatus, fulfillmentStatus, search, disputeStatus, productName, startDate, endDate, startTotal, endTotal, gateway, fraudStatus, }: {
        fulfillmentAgencyId: number;
        pageSize?: number;
        nextPageIndex?: string;
        storeId?: string;
        paymentStatus?: Array<_36_Enums_TransactionStatus>;
        fulfillmentStatus?: Array<_36_Enums_FulfillmentStatus>;
        search?: string;
        disputeStatus?: Array<_36_Enums_OrderDisputeStatus>;
        productName?: string;
        startDate?: string;
        endDate?: string;
        startTotal?: number;
        endTotal?: number;
        gateway?: Array<number>;
        fraudStatus?: Array<FraudStatusType>;
    }): CancelablePromise<{
        data: Array<GetAllOrderResult>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    manualFraudDetection({ requestBody, }: {
        requestBody: ManualFraudDetectionDto;
    }): CancelablePromise<({
        disputeStatus: _36_Enums_OrderDisputeStatus;
        paymentId: number;
        isHandleEvents: boolean;
        fingerPrint: string;
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
        platformFee: number;
        profitFulfillAdmin: number;
        profit: number;
        subTotal: number;
        totalUSD: number;
        total: number;
        note: string;
        additionalInfo: any;
        billingInfo: PrismaJson_BillingInfo;
        province: string;
        address2: string;
        address1: string;
        domain: string;
        currencyId: number;
        shippingFee: number;
        country: string;
        zipCode: string;
        city: string;
        status: _36_Enums_OrderStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
        discount: number;
        FraudDetection: Array<{
            labels: PrismaJson_TypeOfFraudService;
            idempotencyKey: string;
            orderId: string;
            systemFraudDetect: _36_Enums_FraudDetectionStatusType;
            humanFraudDetect: _36_Enums_FraudDetectionStatusType;
            type: _36_Enums_FraudDetectionType;
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            storeId: string;
            id: string;
        }>;
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
                isActive: boolean;
                SKU: string;
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
                    groupPlatformVariantId: number;
                    cost: PrismaJson_PlatformCostInfo;
                    supplierPrice: number;
                    price: number;
                    photo: string;
                    isEnable: boolean;
                    isActive: boolean;
                    variantOption: PrismaJson_VariantOptionValues;
                    SKU: string;
                    deleted: boolean;
                    platformProductId: number;
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
                productId: number;
                cost: PrismaJson_CostInfo;
                supplierPrice: number;
                price: number;
                photo: string;
                isEnable: boolean;
                isActive: boolean;
                variantOption: PrismaJson_VariantOptionValues;
                SKU: string;
                deleted: boolean;
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
        fraudStatus: FraudStatusType;
        Store: {
            primaryDomain: string;
            avatar: string;
            email: string;
            name: string;
            id: string;
            FraudDetection: Array<{
                labels: PrismaJson_TypeOfFraudService;
                idempotencyKey: string;
                orderId: string;
                systemFraudDetect: _36_Enums_FraudDetectionStatusType;
                humanFraudDetect: _36_Enums_FraudDetectionStatusType;
                type: _36_Enums_FraudDetectionType;
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                storeId: string;
                id: string;
            }>;
            fraudStatus: FraudStatusType;
        };
        Payment: {
            type: _36_Enums_PaymentType;
            email: string;
            name: string;
            id: number;
        };
    } | {
        stripeDefaultPaymentMethodId: string;
        stripeCustomerId: string;
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
        primaryDomain: string;
        subDomain: string;
        pageName: string;
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
        fulfillmentAgencyId: number;
        id: string;
        FraudDetection: Array<{
            labels: PrismaJson_TypeOfFraudService;
            idempotencyKey: string;
            orderId: string;
            systemFraudDetect: _36_Enums_FraudDetectionStatusType;
            humanFraudDetect: _36_Enums_FraudDetectionStatusType;
            type: _36_Enums_FraudDetectionType;
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            storeId: string;
            id: string;
        }>;
        Wallet: Array<{
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            storeId: string;
            fulfillmentAgencyId: number;
            balanceUnavailable: PrismaJson_UnavailableBalance;
            payoutAmount: number;
            holdAmount: number;
            balanceDebt: number;
            balanceAvailable: number;
            balanceAmount: number;
            walletName: string;
            id: string;
        }>;
        FulfillmentAgency: {
            timezone: PrismaJson_Timezone;
            type: _36_Enums_FulfillmentAgencyType;
            costCalculationMethod: _36_Enums_CostCalculationMethod;
            executionTime: string;
            status: _36_Enums_FulfillmentAgencyStatus;
            phone: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        };
        Payment: Array<{
            environment: _36_Enums_EnvironmentType;
            UIVersion: number;
            merchantId: string;
            publishableKey: string;
            isShowCompanyAddress: boolean;
            companyAddress: string;
            companyPhone: string;
            companyName: string;
            type: _36_Enums_PaymentType;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            fulfillmentAgencyId: number;
            id: number;
        }>;
        StoreUser: Array<{
            isOwner: boolean;
            userId: string;
            role: _36_Enums_StoreRole;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
        }>;
        fraudStatus: FraudStatusType;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    refundOrder({ fulfillmentAgencyId, orderId, requestBody, }: {
        fulfillmentAgencyId: number;
        orderId: string;
        requestBody: RefundOrderDto;
    }): CancelablePromise<({
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
                isActive: boolean;
                SKU: string;
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
                    groupPlatformVariantId: number;
                    cost: PrismaJson_PlatformCostInfo;
                    supplierPrice: number;
                    price: number;
                    photo: string;
                    isEnable: boolean;
                    isActive: boolean;
                    variantOption: PrismaJson_VariantOptionValues;
                    SKU: string;
                    deleted: boolean;
                    platformProductId: number;
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
                productId: number;
                cost: PrismaJson_CostInfo;
                supplierPrice: number;
                price: number;
                photo: string;
                isEnable: boolean;
                isActive: boolean;
                variantOption: PrismaJson_VariantOptionValues;
                SKU: string;
                deleted: boolean;
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
            stripeDefaultPaymentMethodId: string;
            stripeCustomerId: string;
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
            primaryDomain: string;
            subDomain: string;
            pageName: string;
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
            fulfillmentAgencyId: number;
            id: string;
        };
    } & {
        disputeStatus: _36_Enums_OrderDisputeStatus;
        paymentId: number;
        isHandleEvents: boolean;
        fingerPrint: string;
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
        platformFee: number;
        profitFulfillAdmin: number;
        profit: number;
        subTotal: number;
        totalUSD: number;
        total: number;
        note: string;
        additionalInfo: any;
        billingInfo: PrismaJson_BillingInfo;
        province: string;
        address2: string;
        address1: string;
        domain: string;
        currencyId: number;
        shippingFee: number;
        country: string;
        zipCode: string;
        city: string;
        status: _36_Enums_OrderStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
        discount: number;
    })>;
}
