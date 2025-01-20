export type GetCustomerTrackingDto = {
    storeId: string;
    startDate?: string;
    endDate?: string;
    filterBy?: GetCustomerTrackingDto.filterBy;
};
export declare namespace GetCustomerTrackingDto {
    enum filterBy {
        ORDER = "ORDER",
        REVENUE = "REVENUE"
    }
}
