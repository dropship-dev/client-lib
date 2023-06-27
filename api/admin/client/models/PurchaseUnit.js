"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUnit = void 0;
var PurchaseUnit;
(function (PurchaseUnit) {
    let category;
    (function (category) {
        category["DIGITAL_GOODS"] = "DIGITAL_GOODS";
        category["PHYSICAL_GOODS"] = "PHYSICAL_GOODS";
        category["DONATION"] = "DONATION";
    })(category = PurchaseUnit.category || (PurchaseUnit.category = {}));
    let type;
    (function (type) {
        type["PICKUP_IN_PERSON"] = "PICKUP_IN_PERSON";
        type["SHIPPING"] = "SHIPPING";
    })(type = PurchaseUnit.type || (PurchaseUnit.type = {}));
    let disbursement_mode;
    (function (disbursement_mode) {
        disbursement_mode["INSTANT"] = "INSTANT";
        disbursement_mode["DELAYED"] = "DELAYED";
    })(disbursement_mode = PurchaseUnit.disbursement_mode || (PurchaseUnit.disbursement_mode = {}));
})(PurchaseUnit || (exports.PurchaseUnit = PurchaseUnit = {}));
