"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionService = void 0;
class PermissionService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListStoreUsers({ storeId, nextPageIndex, pageSize = 20, keyword, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/store/{storeId}/account',
            path: {
                'storeId': storeId,
            },
            query: {
                'nextPageIndex': nextPageIndex,
                'pageSize': pageSize,
                'keyword': keyword,
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
     * @returns string Ok
     * @throws ApiError
     */
    searchSellerEmail({ storeId, email, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/store/{storeId}/account/search/email',
            path: {
                'storeId': storeId,
            },
            query: {
                'email': email,
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
    getStoreUserPermissionDetail({ storeId, userId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/store/{storeId}/account/{userId}',
            path: {
                'storeId': storeId,
                'userId': userId,
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
     * @returns void
     * @throws ApiError
     */
    editStoreUser({ storeId, userId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user/store/{storeId}/account/{userId}',
            path: {
                'storeId': storeId,
                'userId': userId,
            },
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
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteStoreUser({ storeId, userId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/store/{storeId}/account/{userId}',
            path: {
                'storeId': storeId,
                'userId': userId,
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
     * @returns string Ok
     * @throws ApiError
     */
    inviteStoreUser({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/store/{storeId}/account/invite',
            path: {
                'storeId': storeId,
            },
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
    /**
     * @returns string Ok
     * @throws ApiError
     */
    acceptStoreInvite({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/store/account/accept-invite',
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
    getCurrentStoreUserPermissionDetail({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/seller/permission/{storeId}',
            path: {
                'storeId': storeId,
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
exports.PermissionService = PermissionService;
