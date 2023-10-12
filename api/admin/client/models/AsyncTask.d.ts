import type { AsyncTaskStatus } from './AsyncTaskStatus';
import type { AsyncTaskType } from './AsyncTaskType';
/**
 * Model AsyncTask
 */
export type AsyncTask = {
    updatedAt: string;
    createdAt: string;
    result: string | null;
    status: AsyncTaskStatus;
    type: AsyncTaskType;
    id: string;
};
