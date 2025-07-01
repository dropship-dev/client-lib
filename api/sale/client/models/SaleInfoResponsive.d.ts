import type { _36_Enums_SaleStatus } from './_36_Enums_SaleStatus';
import type { _36_Enums_SaleUserTrackingType } from './_36_Enums_SaleUserTrackingType';
export type SaleInfoResponsive = {
    referralInfo: {
        gmvPerSale: number;
        gmv: number;
        totalOrder: number;
        totalStore: number;
    };
    sale: {
        SaleUserTracking: Array<{
            actionById: string;
            saleId: number;
            updatedAt: string;
            createdAt: string;
            id: number;
            type: _36_Enums_SaleUserTrackingType;
        }>;
        User: {
            name: string;
            email: string;
            id: string;
        };
        status: _36_Enums_SaleStatus;
        code: string | null;
        id: number;
    };
};
