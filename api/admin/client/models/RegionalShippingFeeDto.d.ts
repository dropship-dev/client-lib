import type { contryInfomationType } from './contryInfomationType';
export type RegionalShippingFeeDto = {
    zoneName: string;
    countries: Array<contryInfomationType>;
    shippingFee: number;
    shippingFeeAdditional: number;
};
