export type CreateAdvertorialPageDto = {
    title: string;
    pageBuilderContent: string;
    pageContent?: string;
    seoTitle?: string;
    permalink: string;
    metaDescription?: string;
    isVisible: boolean;
};
