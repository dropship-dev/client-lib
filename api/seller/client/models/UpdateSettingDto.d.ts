export type UpdateSettingDto = {
    privacyPolicy?: string;
    refundPolicy?: string;
    termsOfService?: string;
    shippingPolicy?: string;
    sellerPolicy?: string;
    isDeductedProfit?: boolean;
    hold?: {
        payoutIn: number;
        holdIn: number;
        retentionRate: number;
    };
};
