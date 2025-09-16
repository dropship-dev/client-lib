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
    createStaffFulfillmentAgency({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account',
            path: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns any Ok
     * @throws ApiError
     */
    getListFulfillmentUsers({ fulfillmentAgencyId, nextPageIndex, pageSize = 20, isActive, rolesId, keyword, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account',
            path: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
            },
            query: {
                'nextPageIndex': nextPageIndex,
                'pageSize': pageSize,
                'isActive': isActive,
                'rolesId': rolesId,
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
     * @returns any Ok
     * @throws ApiError
     */
    searchFulfillmentAgencyStaff({ fulfillmentAgencyId, nextPageIndex, pageSize = 20, keyword, excludeListId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/search',
            path: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
            },
            query: {
                'nextPageIndex': nextPageIndex,
                'pageSize': pageSize,
                'keyword': keyword,
                'excludeListId': excludeListId,
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
    isUserEmailFound({ email, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/is-user-email-found',
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
    getFulfillmentAssignedByRoleId({ roleId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/assigned/role/{roleId}',
            path: {
                'roleId': roleId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    getListRoleByUserId({ userId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/{userId}',
            path: {
                'userId': userId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    editFulfillmentStaff({ userId, fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/{userId}',
            path: {
                'userId': userId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns void
     * @throws ApiError
     */
    updateUserStatus({ userId, fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/{userId}/status',
            path: {
                'userId': userId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns GetPermissionsFulfillAgencyRes Ok
     * @throws ApiError
     */
    getAllPermissions() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/permission/fulfillment-agency',
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
    getListRole({ fulfillmentAgencyId, nextPageIndex, pageSize = 20, keyword, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/permission/fulfillment-agency/role',
            query: {
                'nextPageIndex': nextPageIndex,
                'pageSize': pageSize,
                'keyword': keyword,
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    createRole({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/permission/fulfillment-agency/role',
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
    deleteRole({ roleId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/permission/fulfillment-agency/role/{roleId}',
            path: {
                'roleId': roleId,
            },
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    editRole({ roleId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/permission/fulfillment-agency/role/{roleId}',
            path: {
                'roleId': roleId,
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
     * @returns any Ok
     * @throws ApiError
     */
    getRoleById({ roleId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/permission/fulfillment-agency/role/{roleId}',
            path: {
                'roleId': roleId,
            },
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
