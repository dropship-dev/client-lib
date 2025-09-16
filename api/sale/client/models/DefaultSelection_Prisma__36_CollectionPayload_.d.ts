import type { _36_Enums_CollectionStatus } from './_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from './_36_Enums_CollectionType';
import type { PrismaJson_ConditionCollection } from './PrismaJson_ConditionCollection';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
export type DefaultSelection_Prisma__36_CollectionPayload_ = {
    SEO: any;
    condition: PrismaJson_ConditionCollection;
    photos: PrismaJson_Photos;
    description: string;
    type: _36_Enums_CollectionType;
    status: _36_Enums_CollectionStatus;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
};
