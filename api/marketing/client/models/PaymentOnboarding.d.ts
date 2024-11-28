import type { OnboardingStatus } from './OnboardingStatus';
import type { PaymentType } from './PaymentType';
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
    paymentType: PaymentType;
    fulfillmentAgencyId: number | null;
    storeId: string | null;
    id: number;
};
