import type { PrismaJson_Photos } from './PrismaJson_Photos';
export type PrismaJson_HistoryRequestPayout = Array<{
    createdAt: string;
    photos: PrismaJson_Photos | null;
    noteByAdmin: string | null;
}>;
