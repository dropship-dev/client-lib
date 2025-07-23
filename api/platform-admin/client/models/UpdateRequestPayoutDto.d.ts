import type { PhotoDto } from './PhotoDto';
import type { statusRequestPayout } from './statusRequestPayout';
export type UpdateRequestPayoutDto = {
    photos?: Array<PhotoDto>;
    notes?: string;
    status?: statusRequestPayout;
    otp?: string;
};
