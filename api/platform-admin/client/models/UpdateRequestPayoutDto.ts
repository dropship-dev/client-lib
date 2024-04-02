/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PhotoDto } from './PhotoDto';
import type { statusRequestPayout } from './statusRequestPayout';

export type UpdateRequestPayoutDto = {
  photos?: Array<PhotoDto>;
  notes: string;
  status: statusRequestPayout;
};

