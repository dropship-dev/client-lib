import type { FulfillmentPermissions } from './FulfillmentPermissions';
import type { Permission } from './Permission';
import type { SellerPermission } from './SellerPermission';
import type { SuperAdminPermission } from './SuperAdminPermission';
export type PrismaJson_Permissions = Array<(Permission | SuperAdminPermission | SellerPermission | FulfillmentPermissions)>;
