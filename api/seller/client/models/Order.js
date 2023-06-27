"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var Order;
(function (Order) {
    let status;
    (function (status) {
        status["CREATED"] = "CREATED";
        status["SAVED"] = "SAVED";
        status["APPROVED"] = "APPROVED";
        status["VOIDED"] = "VOIDED";
        status["COMPLETED"] = "COMPLETED";
        status["PAYER_ACTION_REQUIRED"] = "PAYER_ACTION_REQUIRED";
    })(status = Order.status || (Order.status = {}));
    let intent;
    (function (intent) {
        intent["CAPTURE"] = "CAPTURE";
        intent["AUTHORIZE"] = "AUTHORIZE";
    })(intent = Order.intent || (Order.intent = {}));
    let processing_instruction;
    (function (processing_instruction) {
        processing_instruction["ORDER_COMPLETE_ON_PAYMENT_APPROVAL"] = "ORDER_COMPLETE_ON_PAYMENT_APPROVAL";
        processing_instruction["NO_INSTRUCTION"] = "NO_INSTRUCTION";
    })(processing_instruction = Order.processing_instruction || (Order.processing_instruction = {}));
})(Order || (exports.Order = Order = {}));
