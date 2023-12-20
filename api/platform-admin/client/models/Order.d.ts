import type { FulfillmentStatus } from './FulfillmentStatus';
import type { OrderDisputeStatus } from './OrderDisputeStatus';
import type { OrderStatus } from './OrderStatus';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';
/**
 * Model Order
 */
export type Order = {
    updatedAt: string;
    createdAt: string;
    disputeStatus: OrderDisputeStatus | null;
    status: OrderStatus;
    paymentId: number;
    currencyId: number;
    storeId: string;
    fulfillmentStatus: FulfillmentStatus;
    latestNoItems: number;
    latestSubTotal: number;
    latestTotal: number;
    gatewayTransactionId: string | null;
    gatewayOrderId: string;
    lastBalance: number;
    discount: number;
    discountShippingFee: number;
    noItems: number;
    tax: number;
    platformFee: number;
    profitFulfillAdmin: number | null;
    profit: number;
    subTotal: number;
    totalUSD: number;
    total: number;
    shippingFee: number;
    note: string | null;
    domain: string | null;
    /**
     * [BillingInfo]
     */
    billingInfo: PrismaJson_BillingInfo | null;
    country: string;
    zipCode: string;
    province: string;
    city: string;
    address2: string;
    address1: string;
    phone: string | null;
    email: string;
    name: string;
    id: string;
};
