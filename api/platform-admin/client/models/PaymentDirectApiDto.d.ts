import type { paymentIntegrationTypeEnum_DIRECT_API } from './paymentIntegrationTypeEnum_DIRECT_API';
export type PaymentDirectApiDto = {
    merchantId?: string;
    isShowCompanyAddress?: boolean;
    companyAddress?: string;
    companyPhone?: string;
    companyName: string;
    secretKey: string;
    publishableKey: string;
    type: paymentIntegrationTypeEnum_DIRECT_API;
};
