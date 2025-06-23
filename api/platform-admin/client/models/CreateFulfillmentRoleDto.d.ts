import type { FulfillmentPermissions } from './FulfillmentPermissions';
export type CreateFulfillmentRoleDto = {
    name: string;
    permissions: Array<FulfillmentPermissions>;
    assignedUsersId?: Array<string>;
    fulfillmentAgencyId: number;
};
