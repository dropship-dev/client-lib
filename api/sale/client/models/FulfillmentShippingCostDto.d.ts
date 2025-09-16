import type { CountryInformationType } from './CountryInformationType';
export type FulfillmentShippingCostDto = {
    zoneName: string;
    countries: Array<CountryInformationType>;
    shippingFee: number;
};
