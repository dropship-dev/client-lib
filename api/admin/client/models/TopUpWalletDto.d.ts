import type { PhotoDto } from './PhotoDto';
export type TopUpWalletDto = {
    amount: number;
    notes?: string;
    photos?: Array<PhotoDto>;
};
