import type { _36_Enums_SaleStatus } from './_36_Enums_SaleStatus';
import type { _36_Enums_SaleUserTrackingType } from './_36_Enums_SaleUserTrackingType';
import type { _36_Enums_UserRole } from './_36_Enums_UserRole';
export type SaleInfoResponsive = {
    referralInfo: {
        gmvPerSale: number;
        gmv: number;
        totalSeller: number;
        totalOrder: number;
        totalStore: number;
    };
    sale: {
        SaleUserTracking: Array<{
            ActionBy: {
                role: _36_Enums_UserRole;
                email: string;
            };
            actionById: string;
            saleId: number;
            updatedAt: string;
            createdAt: string;
            id: number;
            type: _36_Enums_SaleUserTrackingType;
        }>;
        User: {
            createdAt: string;
            name: string;
            email: string;
            id: string;
        };
        status: _36_Enums_SaleStatus;
        code: string | null;
        id: number;
    };
};
