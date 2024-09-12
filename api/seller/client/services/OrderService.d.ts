import type { FraudDetectionStatusType } from '../models/FraudDetectionStatusType';
import type { FraudStatusType } from '../models/FraudStatusType';
import type { FulfillmentStatus } from '../models/FulfillmentStatus';
import type { Order } from '../models/Order';
import type { OrderDisputeStatus } from '../models/OrderDisputeStatus';
import type { OrderItem } from '../models/OrderItem';
import type { OrderRefund } from '../models/OrderRefund';
import type { OrderStatus } from '../models/OrderStatus';
import type { PaymentType } from '../models/PaymentType';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { ProductVariant } from '../models/ProductVariant';
import type { RefundOrderDto } from '../models/RefundOrderDto';
import type { Store } from '../models/Store';
import type { Transaction } from '../models/Transaction';
import type { TransactionStatus } from '../models/TransactionStatus';
import type { TypeOfFraudService } from '../models/TypeOfFraudService';
import type { UpdateFulFillmentStatusResp } from '../models/UpdateFulFillmentStatusResp';
import type { UpdateOrderStatusDto } from '../models/UpdateOrderStatusDto';
import type { VariantCombo } from '../models/VariantCombo';
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
        paymentStatus?: Array<TransactionStatus>;
        /**
         * filter by fulfillment status
         */
        fulfillmentStatus?: Array<FulfillmentStatus>;
        disputeStatus?: Array<OrderDisputeStatus>;
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
            fulfillmentStatus: FulfillmentStatus;
            disputeStatus: OrderDisputeStatus;
            status: OrderStatus;
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
                status: TransactionStatus;
            }>;
            Payment: {
                email: string;
                name: string;
                type: PaymentType;
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
     * @returns any Ok
     * @throws ApiError
     */
    getStoreOrder({ storeId, orderId, }: {
        storeId: string;
        orderId: string;
    }): CancelablePromise<(Order & {
        FraudDetection: Array<{
            labels: TypeOfFraudService;
            humanFraudDetect: FraudDetectionStatusType;
            systemFraudDetect: FraudDetectionStatusType;
        }>;
        OrderRefund: Array<OrderRefund>;
        OrderItem: Array<(OrderItem & {
            VariantCombo: VariantCombo;
            ProductVariant: (ProductVariant & {
                Product: {
                    name: string;
                };
            });
        })>;
        Transaction: Array<Transaction>;
        Payment: {
            email: string;
            name: string;
            type: PaymentType;
            id: number;
        };
        Store: {
            primaryDomain: string;
            avatar: string;
            email: string;
            name: string;
            id: string;
        };
    })>;
    /**
     * @returns UpdateFulFillmentStatusResp Ok
     * @throws ApiError
     */
    updateOrderOfStoreStatus({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateOrderStatusDto;
    }): CancelablePromise<UpdateFulFillmentStatusResp>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    refundOrderForSeller({ storeId, orderId, requestBody, }: {
        storeId: string;
        orderId: string;
        requestBody: RefundOrderDto;
    }): CancelablePromise<(Order & {
        OrderRefund: Array<OrderRefund>;
        OrderItem: Array<(OrderItem & {
            VariantCombo: (VariantCombo & {
                Product: {
                    name: string;
                };
            });
            ProductVariant: (ProductVariant & {
                Product: {
                    name: string;
                };
                PlatformVariant: PlatformVariant;
            });
        })>;
        Transaction: Array<Transaction>;
        Store: Store;
    })>;
}
