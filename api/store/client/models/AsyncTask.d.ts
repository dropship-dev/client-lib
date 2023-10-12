import type { AsyncTaskStatus } from './AsyncTaskStatus';
import type { AsyncTaskType } from './AsyncTaskType';
import type { ExportOrderResult } from './ExportOrderResult';
import type { Prisma_JsonValue } from './Prisma_JsonValue';
/**
 * Model AsyncTask
 */
export type AsyncTask = {
    updatedAt: string;
    createdAt: string;
    /**
     * [AsyncTaskResult]
     */
    result: ExportOrderResult | null;
    input: Prisma_JsonValue | null;
    status: AsyncTaskStatus;
    type: AsyncTaskType;
    id: string;
};
