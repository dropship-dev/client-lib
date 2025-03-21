export type CreateSuperAdminDto = {
    name: string;
    email: string;
    phone?: string;
    rolesId: Array<number>;
};
