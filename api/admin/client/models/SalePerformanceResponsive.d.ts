export type SalePerformanceResponsive = {
    data: Array<{
        purchased: number;
        GMV: number;
        timeFrame: {
            end: string;
            start: string;
        };
    }>;
    type: SalePerformanceResponsive.type;
};
export declare namespace SalePerformanceResponsive {
    enum type {
        DAY = "day",
        WEEK = "week",
        MONTH = "month",
        YEAR = "year",
        HOUR = "hour"
    }
}
