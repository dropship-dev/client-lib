import type { _36_Enums_FulfillmentPlatform } from './_36_Enums_FulfillmentPlatform';
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { FraudDetection } from './FraudDetection';
import type { FraudStatusType } from './FraudStatusType';
import type { Order } from './Order';
import type { OrderItem } from './OrderItem';
import type { OrderRefund } from './OrderRefund';
import type { PlatformVariant } from './PlatformVariant';
import type { ProductVariant } from './ProductVariant';
import type { Transaction } from './Transaction';
import type { VariantCombo } from './VariantCombo';
export type GetOrderResult = (Order & {
    fulfillmentPlatformSuppliers: Array<{
        FulfillmentPlatformSupplier: {
            platform: _36_Enums_FulfillmentPlatform;
        } | null;
        id: number;
    }>;
    fraudStatus?: FraudStatusType;
    OrderRefund: Array<OrderRefund>;
    Store: {
        fraudStatus?: FraudStatusType;
        FraudDetection: Array<FraudDetection>;
        email: string;
        avatar: string | null;
        primaryDomain: string;
        name: string;
        id: string;
    };
    OrderItem: Array<(OrderItem & {
        VariantCombo: (VariantCombo & {
            Product: {
                name: string;
                id: number;
            };
        }) | null;
        ProductVariant: (ProductVariant & {
            PlatformVariant: PlatformVariant | null;
            Product: {
                platformProductId: number | null;
                name: string;
                id: number;
            };
        }) | null;
    })>;
    Transaction: Array<Transaction>;
    Payment: {
        PaymentOnboarding: {
            isDeleted: boolean;
            id: number;
        } | null;
        deleted: boolean;
        type: _36_Enums_PaymentType;
        email: string;
        name: string;
        id: number;
    };
    FraudDetection: Array<FraudDetection>;
    refundAmountExcludeTax: number;
    refundAmountIncludeTax: number;
});
