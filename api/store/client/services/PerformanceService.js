"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceService = void 0;
class PerformanceService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getVisitorViewProductByFulfillment({ fulfillmentAgencyId, startDate, endDate, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/performance/{fulfillmentAgencyId}/get-visitor-by-fulfilmment-agency',
            path: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
            },
            query: {
                'startDate': startDate,
                'endDate': endDate,
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
exports.PerformanceService = PerformanceService;
