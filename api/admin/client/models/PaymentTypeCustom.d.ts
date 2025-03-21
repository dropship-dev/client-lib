import type { _36_Enums_EnvironmentType } from './_36_Enums_EnvironmentType';
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
export type PaymentTypeCustom = {
    id: number;
    type: _36_Enums_PaymentType;
    name: string;
    publishableKey: string;
    companyName: string | null;
    companyPhone: string | null;
    companyAddress: string | null;
    isShowCompanyAddress: boolean | null;
    fulfillmentAgencyId: number | null;
    email: string;
    createdAt: string;
    updatedAt: string;
    environment: _36_Enums_EnvironmentType | null;
    UIVersion: number;
    merchantId: string | null;
    BNcode: string | null;
    PaymentOnboarding: {
        id: number;
    } | null;
};
