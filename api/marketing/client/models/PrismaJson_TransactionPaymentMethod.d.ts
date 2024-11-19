export type PrismaJson_TransactionPaymentMethod = {
    info: ({
        last4: string;
        brand: string;
    } | string);
    paymentType: PrismaJson_TransactionPaymentMethod.paymentType;
};
export declare namespace PrismaJson_TransactionPaymentMethod {
    enum paymentType {
        CREDIT_CARD = "CreditCard",
        ACCOUNT_BALANCE = "AccountBalance",
        APPLE_PAY = "ApplePay",
        GOOGLE_PAY = "GooglePay",
        PAY_PAL = "PayPal"
    }
}
