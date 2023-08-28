/**
 * Model Setting
 */
export type Setting = {
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number | null;
    shippingPolicy: string;
    termsOfService: string;
    refundPolicy: string;
    privacyPolicy: string;
    id: number;
};
