import type { PrismaJson_CountryInformations } from './PrismaJson_CountryInformations';
/**
 * Model RegionalShippingFee
 */
export type RegionalShippingFee = {
    deleted: boolean;
    updatedAt: string;
    createdAt: string;
    storeId: string | null;
    shippingFeeAdditional: number;
    shippingFee: number;
    /**
     * [CountryInformations]
     */
    countries: PrismaJson_CountryInformations;
    zoneName: string;
    id: string;
};
