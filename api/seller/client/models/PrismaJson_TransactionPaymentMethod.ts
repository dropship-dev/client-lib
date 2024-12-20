/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PrismaJson_TransactionPaymentMethod = {
  info: ({
    last4: string;
    brand: string;
  } | string);
  paymentType: PrismaJson_TransactionPaymentMethod.paymentType;
};
export namespace PrismaJson_TransactionPaymentMethod {
  export enum paymentType {
    CREDIT_CARD = 'CreditCard',
    ACCOUNT_BALANCE = 'AccountBalance',
    APPLE_PAY = 'ApplePay',
    GOOGLE_PAY = 'GooglePay',
    PAY_PAL = 'PayPal',
  }
}

