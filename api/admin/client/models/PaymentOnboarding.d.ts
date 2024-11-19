import type { OnboardingStatus } from './OnboardingStatus';
/**
 * Model PaymentOnboarding
 */
export type PaymentOnboarding = {
    updatedAt: string;
    createdAt: string;
    paypalPartnerReferralId: string | null;
    onboardingStatus: OnboardingStatus | null;
    onboardingUrl: string;
    onboardingId: string;
    merchantEmail: string | null;
    merchantId: string | null;
    paymentId: number;
    fulfillmentAgencyId: number | null;
    storeId: string | null;
    id: number;
};
