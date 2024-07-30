"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsService = void 0;
class StatisticsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsBusinessPerformancesSummary({ startTime = '2023-01-02T00:00:00.000Z', endTime = '2024-07-30T08:45:18.813Z', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketing/statistics/business-performances',
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
            errors: {
                400: `Bad request`,
                401: `Invalid token`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsOverview({ startTime = '2023-01-02T00:00:00.000Z', endTime = '2024-07-30T08:45:18.828Z', timezone, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketing/statistics/automation-overview',
            query: {
                'startTime': startTime,
                'endTime': endTime,
                'timezone': timezone,
            },
            errors: {
                400: `Bad request`,
                401: `Invalid token`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsAutomationMetrics({ startTime = '2023-01-02T00:00:00.000Z', endTime = '2024-07-30T08:45:18.848Z', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketing/statistics/automation-metrics',
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
            errors: {
                400: `Bad request`,
                401: `Invalid token`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsPerforming({ startTime = '2023-01-02T00:00:00.000Z', endTime = '2024-07-30T08:45:18.856Z', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketing/statistics/performing',
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
            errors: {
                400: `Bad request`,
                401: `Invalid token`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
}
exports.StatisticsService = StatisticsService;
