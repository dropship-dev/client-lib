export type UpdateSettingDto = {
    privacyPolicy?: string;
    refundPolicy?: string;
    termsOfService?: string;
    shippingPolicy?: string;
    isDeductedProfit?: boolean;
    hold?: {
        payoutIn: number;
        holdIn: number;
        retentionRate: number;
    };
};
