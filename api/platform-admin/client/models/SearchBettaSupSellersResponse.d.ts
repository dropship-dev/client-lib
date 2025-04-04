export type SearchBettaSupSellersResponse = {
    previousCursor?: string | null;
    nextCursor?: string | null;
    data: Array<{
        userId: number;
        email: string;
    }>;
};
