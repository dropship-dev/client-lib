export type UpdateSettingDto = {
    privacyPolicy?: string;
    refundPolicy?: string;
    termsOfService?: string;
    shippingPolicy?: string;
    hold?: {
        payoutIn: number;
        holdIn: number;
        retentionRate: number;
    };
};
