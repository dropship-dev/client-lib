export type CreateStaffFulfillmentAgencyDto = {
    name: string;
    email: string;
    phone?: string;
    roleIds: Array<number>;
};
