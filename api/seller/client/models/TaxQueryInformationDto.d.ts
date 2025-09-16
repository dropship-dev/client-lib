export type TaxQueryInformationDto = {
    /**
     * Store id (optional), but required when role is SELLER
     */
    storeId?: string;
    /**
     * Fulfillment agency id (optional), but required when role is ADMIN
     */
    fulfillmentAgencyId?: number;
};
