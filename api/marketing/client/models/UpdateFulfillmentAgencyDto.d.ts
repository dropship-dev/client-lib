import type { CostCalculationMethod } from './CostCalculationMethod';
export type UpdateFulfillmentAgencyDto = {
    name?: string;
    phone?: string;
    costCalculationMethod?: CostCalculationMethod;
    percentageCostPlatformFee?: number;
};
