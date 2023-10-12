"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncTaskService = void 0;
class AsyncTaskService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns AsyncTask Ok
     * @throws ApiError
     */
    getAsyncTask({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async-task/{id}',
            path: {
                'id': id,
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
exports.AsyncTaskService = AsyncTaskService;
