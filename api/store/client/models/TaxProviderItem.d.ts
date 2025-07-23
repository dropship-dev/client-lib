import type { TaxProviderPaymentItem } from './TaxProviderPaymentItem';
export type TaxProviderItem = {
    countrySupports: Array<string>;
    payments: Array<TaxProviderPaymentItem>;
    name: string;
    id: number;
};
