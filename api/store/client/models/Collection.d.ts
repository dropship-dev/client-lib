import type { Prisma_JsonValue } from './Prisma_JsonValue';
/**
 * Model Collection
 */
export type Collection = {
    updatedAt: string;
    createdAt: string;
    description: string | null;
    condition: Prisma_JsonValue;
    photo: string;
    name: string;
    storeId: string;
    id: number;
};
