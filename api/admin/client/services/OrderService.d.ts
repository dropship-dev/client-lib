import type { BillingInfo } from '../models/BillingInfo';
import type { Campaign } from '../models/Campaign';
import type { ExportOrderResponseDto } from '../models/ExportOrderResponseDto';
import type { FraudDetection } from '../models/FraudDetection';
import type { FraudStatusType } from '../models/FraudStatusType';
import type { FulfillmentStatus } from '../models/FulfillmentStatus';
import type { JsonValue } from '../models/JsonValue';
import type { ManualFraudDetectionDto } from '../models/ManualFraudDetectionDto';
import type { Order } from '../models/Order';
import type { OrderDisputeStatus } from '../models/OrderDisputeStatus';
import type { OrderItem } from '../models/OrderItem';
import type { OrderRefund } from '../models/OrderRefund';
import type { OrderStatus } from '../models/OrderStatus';
import type { Payment } from '../models/Payment';
import type { PaymentType } from '../models/PaymentType';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { RefundOrderDto } from '../models/RefundOrderDto';
import type { Store } from '../models/Store';
import type { StoreStatus } from '../models/StoreStatus';
import type { StoreType } from '../models/StoreType';
import type { SyncBalanceAmount } from '../models/SyncBalanceAmount';
import type { Theme } from '../models/Theme';
import type { ThemePage } from '../models/ThemePage';
import type { Timezone } from '../models/Timezone';
import type { Transaction } from '../models/Transaction';
import type { TransactionStatus } from '../models/TransactionStatus';
import type { UpdateFulFillmentStatusResp } from '../models/UpdateFulFillmentStatusResp';
import type { UpdateOrderStatusDto } from '../models/UpdateOrderStatusDto';
import type { VariantCombo } from '../models/VariantCombo';
import type { Wallet } from '../models/Wallet';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class OrderService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllOrders({ fulfillmentAgencyId, pageSize, nextPageIndex, storeId, paymentStatus, fulfillmentStatus, search, disputeStatus, productName, startDate, endDate, startTotal, endTotal, gateway, fraudStatus, }: {
        fulfillmentAgencyId: number;
        pageSize?: number;
        nextPageIndex?: string;
        storeId?: string;
        paymentStatus?: Array<TransactionStatus>;
        fulfillmentStatus?: Array<FulfillmentStatus>;
        search?: string;
        disputeStatus?: Array<OrderDisputeStatus>;
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
        data: Array<(Order & {
            FraudDetection: Array<FraudDetection>;
            OrderRefund: Array<OrderRefund>;
            OrderItem: Array<(OrderItem & {
                VariantCombo: (VariantCombo & {
                    Product: Product;
                });
                ProductVariant: (ProductVariant & {
                    Product: Product;
                    PlatformVariant: PlatformVariant;
                });
            })>;
            Transaction: Array<Transaction>;
            Payment: Payment;
            Store: (Store & {
                FraudDetection: Array<FraudDetection>;
            });
        })>;
    }>;
    /**
     * @returns ExportOrderResponseDto Ok
     * @throws ApiError
     */
    exportAllOrders({ fulfillmentAgencyId, storeId, paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }: {
        fulfillmentAgencyId: number;
        storeId?: string;
        paymentStatus?: TransactionStatus;
        fulfillmentStatus?: Array<FulfillmentStatus>;
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
     * @returns any Ok
     * @throws ApiError
     */
    getOrder({ fulfillmentAgencyId, id, }: {
        fulfillmentAgencyId: number;
        id: string;
    }): CancelablePromise<{
        FraudDetection: Array<FraudDetection>;
        OrderRefund: Array<OrderRefund>;
        OrderItem: Array<(OrderItem & {
            VariantCombo: (VariantCombo & {
                Product: Product;
            });
            ProductVariant: (ProductVariant & {
                Product: Product;
                PlatformVariant: PlatformVariant;
            });
        })>;
        Transaction: Array<Transaction>;
        Payment: Payment;
        Store: (Store & {
            FraudDetection: Array<FraudDetection>;
        });
        updatedAt: string;
        createdAt: string;
        disputeStatus: OrderDisputeStatus;
        status: OrderStatus;
        paymentId: number;
        currencyId: number;
        storeId: string;
        fingerPrint: string;
        timezoneLocalBrowser: string;
        fulfillmentCost: number;
        fulfillmentStatus: FulfillmentStatus;
        isSyncBalance: SyncBalanceAmount;
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
        discount: number;
        discountShippingFee: number;
        noItems: number;
        tax: number;
        platformFee: number;
        profitFulfillAdmin: number;
        profit: number;
        subTotal: number;
        totalUSD: number;
        total: number;
        shippingFee: number;
        note: string;
        domain: string;
        additionalInfo: JsonValue;
        billingInfo: BillingInfo;
        country: string;
        zipCode: string;
        province: string;
        city: string;
        address2: string;
        address1: string;
        phone: string;
        email: string;
        name: string;
        id: string;
        fraudStatus: FraudStatusType;
        storeMapper: any;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    manualFraudDetection({ requestBody, }: {
        requestBody: ManualFraudDetectionDto;
    }): CancelablePromise<({
        FraudDetection: Array<FraudDetection>;
        OrderRefund: Array<OrderRefund>;
        OrderItem: Array<(OrderItem & {
            VariantCombo: (VariantCombo & {
                Product: Product;
            });
            ProductVariant: (ProductVariant & {
                Product: Product;
                PlatformVariant: PlatformVariant;
            });
        })>;
        Transaction: Array<Transaction>;
        Payment: Payment;
        Store: (Store & {
            FraudDetection: Array<FraudDetection>;
        });
        updatedAt: string;
        createdAt: string;
        disputeStatus: OrderDisputeStatus;
        status: OrderStatus;
        paymentId: number;
        currencyId: number;
        storeId: string;
        fingerPrint: string;
        timezoneLocalBrowser: string;
        fulfillmentCost: number;
        fulfillmentStatus: FulfillmentStatus;
        isSyncBalance: SyncBalanceAmount;
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
        discount: number;
        discountShippingFee: number;
        noItems: number;
        tax: number;
        platformFee: number;
        profitFulfillAdmin: number;
        profit: number;
        subTotal: number;
        totalUSD: number;
        total: number;
        shippingFee: number;
        note: string;
        domain: string;
        additionalInfo: JsonValue;
        billingInfo: BillingInfo;
        country: string;
        zipCode: string;
        province: string;
        city: string;
        address2: string;
        address1: string;
        phone: string;
        email: string;
        name: string;
        id: string;
        fraudStatus: FraudStatusType;
        storeMapper: any;
    } | {
        FraudDetection: Array<FraudDetection>;
        Wallet: Array<Wallet>;
        Payment: Array<{
            publishableKey: string;
            isShowCompanyAddress: boolean;
            companyAddress: string;
            companyPhone: string;
            companyName: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            type: PaymentType;
            id: number;
            fulfillmentAgencyId: number;
        }>;
        Theme: Array<(Theme & {
            ThemePage: Array<ThemePage>;
        })>;
        updatedAt: string;
        createdAt: string;
        currencyId: number;
        fulfillmentAgencyId: number;
        maxUsers: number;
        balance: number;
        referralCode: string;
        type: StoreType;
        defaultBankAccount: string;
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        timezone: Timezone;
        primaryDomain: string;
        subDomain: string;
        pageName: string;
        status: StoreStatus;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        avatar: string;
        email: string;
        phone: string;
        name: string;
        id: string;
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
    }): CancelablePromise<(Order & {
        OrderRefund: Array<OrderRefund>;
        OrderItem: Array<(OrderItem & {
            VariantCombo: (VariantCombo & {
                Product: Product;
            });
            ProductVariant: (ProductVariant & {
                Product: Product;
                PlatformVariant: PlatformVariant;
            });
        })>;
        Transaction: Array<Transaction>;
        Store: Store;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStoreOrder({ storeId, pageSize, nextPageIndex, paymentStatus, fulfillmentStatus, disputeStatus, search, email, productName, startDate, endDate, startTotal, endTotal, gateway, fraudStatus, }: {
        /**
         * filter by store ID
         */
        storeId: string;
        pageSize?: number;
        nextPageIndex?: string;
        /**
         * filter by payment status
         */
        paymentStatus?: Array<TransactionStatus>;
        /**
         * filter by fulfillment status
         */
        fulfillmentStatus?: Array<FulfillmentStatus>;
        disputeStatus?: Array<OrderDisputeStatus>;
        search?: string;
        /**
         * filter by customer email (email contain)
         */
        email?: string;
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
        data: Array<(Order & {
            OrderRefund: Array<OrderRefund>;
            OrderItem: Array<(OrderItem & {
                VariantCombo: (VariantCombo & {
                    Product: (Product & {
                        Campaign: Campaign;
                    });
                });
                ProductVariant: (ProductVariant & {
                    Product: {
                        name: string;
                        Campaign: Campaign;
                    };
                    PlatformVariant: {
                        price: number;
                        name: string;
                        id: number;
                    };
                });
            })>;
            Transaction: Array<Transaction>;
            Payment: {
                email: string;
                name: string;
                type: PaymentType;
            };
            Store: Store;
        })>;
    }>;
}
