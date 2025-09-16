"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaJson_TransactionPaymentMethod = void 0;
var PrismaJson_TransactionPaymentMethod;
(function (PrismaJson_TransactionPaymentMethod) {
    let paymentType;
    (function (paymentType) {
        paymentType["CREDIT_CARD"] = "CreditCard";
        paymentType["ACCOUNT_BALANCE"] = "AccountBalance";
        paymentType["APPLE_PAY"] = "ApplePay";
        paymentType["GOOGLE_PAY"] = "GooglePay";
        paymentType["PAY_PAL"] = "PayPal";
    })(paymentType = PrismaJson_TransactionPaymentMethod.paymentType || (PrismaJson_TransactionPaymentMethod.paymentType = {}));
})(PrismaJson_TransactionPaymentMethod || (exports.PrismaJson_TransactionPaymentMethod = PrismaJson_TransactionPaymentMethod = {}));
