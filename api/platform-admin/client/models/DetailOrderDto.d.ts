import type { _36_Enums_FraudDetectionStatusType } from './_36_Enums_FraudDetectionStatusType';
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { Order } from './Order';
import type { OrderItem } from './OrderItem';
import type { OrderRefund } from './OrderRefund';
import type { PrismaJson_TypeOfFraudService } from './PrismaJson_TypeOfFraudService';
import type { ProductVariant } from './ProductVariant';
import type { Transaction } from './Transaction';
import type { VariantCombo } from './VariantCombo';
export type DetailOrderDto = (Order & {
    isDeductedProfit?: boolean | null;
    Store: {
        email: string;
        avatar: string | null;
        primaryDomain: string;
        name: string;
        id: string;
    };
    Transaction: Array<Transaction>;
    Payment: {
        deleted: boolean;
        email: string;
        type: _36_Enums_PaymentType;
        name: string;
        id: number;
    };
    FraudDetection: Array<{
        humanFraudDetect: _36_Enums_FraudDetectionStatusType;
        systemFraudDetect: _36_Enums_FraudDetectionStatusType;
        labels: PrismaJson_TypeOfFraudService | null;
    }>;
    OrderItem: Array<(OrderItem & {
        ProductVariant: (ProductVariant & {
            Product: {
                name: string;
                id: number;
            };
        }) | null;
        VariantCombo: VariantCombo | null;
    })>;
    OrderRefund: Array<OrderRefund>;
});
