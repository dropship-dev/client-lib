import type { _36_Enums_StoreRole } from './_36_Enums_StoreRole';
import type { _36_Enums_StoreUserInviteStatus } from './_36_Enums_StoreUserInviteStatus';
import type { PrismaJson_Permissions } from './PrismaJson_Permissions';
export type DefaultSelection_Prisma__36_StoreUserPayload_ = {
    inviteId: string;
    inviteStatus: _36_Enums_StoreUserInviteStatus;
    userName: string;
    permissions: PrismaJson_Permissions;
    isOwner: boolean;
    role: _36_Enums_StoreRole;
    userId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
};
