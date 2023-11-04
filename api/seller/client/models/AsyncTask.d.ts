import type { AsyncTaskStatus } from './AsyncTaskStatus';
import type { AsyncTaskType } from './AsyncTaskType';
import type { Prisma_JsonValue } from './Prisma_JsonValue';
import type { PrismaJson_AsyncTaskResult } from './PrismaJson_AsyncTaskResult';
/**
 * Model AsyncTask
 */
export type AsyncTask = {
    updatedAt: string;
    createdAt: string;
    /**
     * [AsyncTaskResult]
     */
    result: PrismaJson_AsyncTaskResult | null;
    input: Prisma_JsonValue | null;
    status: AsyncTaskStatus;
    type: AsyncTaskType;
    id: string;
};
