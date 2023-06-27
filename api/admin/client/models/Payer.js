"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payer = void 0;
var Payer;
(function (Payer) {
    let tax_id_type;
    (function (tax_id_type) {
        tax_id_type["BR_CPF"] = "BR_CPF";
        tax_id_type["BR_CNPJ"] = "BR_CNPJ";
    })(tax_id_type = Payer.tax_id_type || (Payer.tax_id_type = {}));
    let phone_type;
    (function (phone_type) {
        phone_type["MOBILE"] = "MOBILE";
        phone_type["HOME"] = "HOME";
        phone_type["FAX"] = "FAX";
        phone_type["OTHER"] = "OTHER";
        phone_type["PAGER"] = "PAGER";
    })(phone_type = Payer.phone_type || (Payer.phone_type = {}));
})(Payer || (exports.Payer = Payer = {}));
