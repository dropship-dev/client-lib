"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationType = void 0;
var NotificationType;
(function (NotificationType) {
    NotificationType["STORE_APPROVED"] = "STORE_APPROVED";
    NotificationType["STORE_REJECTED"] = "STORE_REJECTED";
    NotificationType["STORE_ACTIVATED"] = "STORE_ACTIVATED";
    NotificationType["STORE_SUSPENDED"] = "STORE_SUSPENDED";
    NotificationType["STORE_REQUESTING"] = "STORE_REQUESTING";
    NotificationType["PAYOUT_REQUESTING"] = "PAYOUT_REQUESTING";
    NotificationType["PAYOUT_APPROVED"] = "PAYOUT_APPROVED";
    NotificationType["PAYOUT_REJECTED"] = "PAYOUT_REJECTED";
    NotificationType["ORDER_CREATED"] = "ORDER_CREATED";
    NotificationType["ORDER_DISPUTED"] = "ORDER_DISPUTED";
    NotificationType["ORDER_REFUNDED"] = "ORDER_REFUNDED";
    NotificationType["DISPUTE_RESOLVED"] = "DISPUTE_RESOLVED";
    NotificationType["FRAUD_DETECTED"] = "FRAUD_DETECTED";
    NotificationType["BROADCAST"] = "BROADCAST";
})(NotificationType || (exports.NotificationType = NotificationType = {}));