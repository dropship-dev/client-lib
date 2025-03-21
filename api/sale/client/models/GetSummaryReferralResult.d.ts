export type GetSummaryReferralResult = {
    AOV: {
        growth: number | null;
        value: number;
    };
    order: {
        growth: number | null;
        value: number;
    };
    GMV: {
        growth: number | null;
        value: number;
    };
};
