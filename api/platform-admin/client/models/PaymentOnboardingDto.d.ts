import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { OnboardingProduct } from './OnboardingProduct';
import type { paymentIntegrationTypeEnum_ONBOARDING } from './paymentIntegrationTypeEnum_ONBOARDING';
export type PaymentOnboardingDto = {
    onboardingProduct: OnboardingProduct;
    paymentType: _36_Enums_PaymentType;
    type: paymentIntegrationTypeEnum_ONBOARDING;
};
