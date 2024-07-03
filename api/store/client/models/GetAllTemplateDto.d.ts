export type GetAllTemplateDto = {
    search?: string;
    sort?: GetAllTemplateDto.sort;
    status?: boolean;
    podProductTypeId?: number;
    storeId?: string;
    fulfillmentAgencyId?: number;
    isFavorite?: boolean;
    page?: number;
    limit?: number;
};
export declare namespace GetAllTemplateDto {
    enum sort {
        ASC = "ASC",
        DESC = "DESC"
    }
}
