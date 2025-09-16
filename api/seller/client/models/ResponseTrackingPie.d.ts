export type ResponseTrackingPie = {
    data: Array<{
        percentOfTotal: number;
        total: number;
        growth: number;
        label: string;
    }>;
    total: number;
};
