export type ResponseTrackingPie = {
    data: Array<{
        total: number;
        growth: number;
        label: string;
    }>;
    total: number;
};
