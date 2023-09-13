/**
 * Model Campaign
 */
export type Campaign = {
    updatedAt: string;
    createdAt: string;
    userUpdated: string | null;
    userCreated: string | null;
    status: boolean;
    duaration: string | null;
    startDate: string;
    label: string;
    id: string;
};
