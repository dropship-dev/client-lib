import type { CountryInformationType } from './CountryInformationType';
export type RegionalShippingFeeDto = {
    zoneName: string;
    countries: Array<CountryInformationType>;
    shippingFee: number;
    shippingFeeAdditional: number;
};
