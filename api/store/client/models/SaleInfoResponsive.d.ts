import type { _36_Enums_SaleStatus } from './_36_Enums_SaleStatus';
import type { _36_Enums_SaleUserTrackingType } from './_36_Enums_SaleUserTrackingType';
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
