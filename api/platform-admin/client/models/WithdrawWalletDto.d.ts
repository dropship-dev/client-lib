import type { PhotoDto } from './PhotoDto';
export type WithdrawWalletDto = {
    amount: number;
    notes?: string;
    photos?: Array<PhotoDto>;
};
