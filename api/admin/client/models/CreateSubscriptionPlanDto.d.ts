export type CreateSubscriptionPlanDto = {
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    platformTransactionFee: number;
    subscriptionFeatureIds: Array<number>;
};
