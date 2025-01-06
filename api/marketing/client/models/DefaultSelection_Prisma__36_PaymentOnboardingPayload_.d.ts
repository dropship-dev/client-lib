import type { _36_Enums_OnboardingStatus } from './_36_Enums_OnboardingStatus';
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
export type DefaultSelection_Prisma__36_PaymentOnboardingPayload_ = {
    paypalPartnerReferralId: string;
    oAuthIntegration: boolean;
    paymentReceivable: boolean;
    primaryEmailConfirmed: boolean;
    onboardingStatus: _36_Enums_OnboardingStatus;
    onboardingUrl: string;
    onboardingId: string;
    merchantEmail: string;
    merchantId: string;
    paymentType: _36_Enums_PaymentType;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    fulfillmentAgencyId: number;
    id: number;
};
