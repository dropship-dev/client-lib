import type { _36_Enums_UserRole } from './_36_Enums_UserRole';
export type LoginDto = {
    firebaseToken: string;
    role?: _36_Enums_UserRole;
    referralCode?: string;
};
