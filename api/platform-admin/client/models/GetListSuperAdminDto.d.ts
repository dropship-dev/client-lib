export type GetListSuperAdminDto = {
    nextPageIndex?: string;
    pageSize?: number;
    isActive?: boolean;
    rolesId?: Array<number>;
    keyword?: string;
};
