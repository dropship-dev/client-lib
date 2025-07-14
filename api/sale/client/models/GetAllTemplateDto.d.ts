import type { StatusTemplate } from './StatusTemplate';
export type GetAllTemplateDto = {
    search?: string;
    sort?: GetAllTemplateDto.sort;
    status?: Array<StatusTemplate>;
    podProductTypeId?: number;
    ignorePodTemplateId?: number;
    podCategoryId?: number;
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
