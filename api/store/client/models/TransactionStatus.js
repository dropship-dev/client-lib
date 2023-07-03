"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatus = void 0;
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "PENDING";
    TransactionStatus["PAID"] = "PAID";
    TransactionStatus["FAILED"] = "FAILED";
    TransactionStatus["REFUNDED"] = "REFUNDED";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
