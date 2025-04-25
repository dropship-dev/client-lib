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
    getListSuperAdmin({ nextPageIndex, pageSize = 20, isActive, rolesId, keyword, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/super-admin/account',
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
    createSuperAdmin({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/super-admin/account',
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
    searchSuperAdmin({ nextPageIndex, pageSize = 20, keyword, excludeListId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/super-admin/account/search',
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
            url: '/user/super-admin/account/is-user-email-found',
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
    getSuperAdminsAssignedByRoleId({ roleId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/super-admin/account/assigned/role/{roleId}',
            path: {
                'roleId': roleId,
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
    editSuperAdmin({ userId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/super-admin/account/{userId}',
            path: {
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
     * @returns void
     * @throws ApiError
     */
    changePassword({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/super-admin/account/change-password',
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
    updateUserStatus({ userId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/super-admin/account/{userId}/status',
            path: {
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
     * @returns CreateRoleRes Ok
     * @throws ApiError
     */
    createRole({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/super-admin/permission/role',
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
    getListRole({ nextPageIndex, pageSize = 20, keyword, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/super-admin/permission/role',
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
     * @returns void
     * @throws ApiError
     */
    editRole({ roleId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/super-admin/permission/role/{roleId}',
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
     * @returns void
     * @throws ApiError
     */
    deleteRole({ roleId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/super-admin/permission/role/{roleId}',
            path: {
                'roleId': roleId,
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
    getRoleById({ roleId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/super-admin/permission/role/{roleId}',
            path: {
                'roleId': roleId,
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
     * @returns GetPermissionsRes Ok
     * @throws ApiError
     */
    getAllPermissions() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/super-admin/permission',
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
    getListRoleByUserId({ userId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/super-admin/permission/role/user/{userId}',
            path: {
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
     * @returns any Ok
     * @throws ApiError
     */
    searchRoleByName({ nextPageIndex, pageSize = 20, keyword, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/super-admin/permission/role/search',
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
}
exports.PermissionService = PermissionService;
