"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
class UploadService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createUpload({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/upload',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
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
    createUploadImageData({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/upload/image-data',
            body: requestBody,
            mediaType: 'application/json',
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
exports.UploadService = UploadService;
