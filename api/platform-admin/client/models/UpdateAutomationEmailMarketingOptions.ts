/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimeEmailMarketingUnit } from './TimeEmailMarketingUnit';
import type { Week } from './Week';

export type UpdateAutomationEmailMarketingOptions = {
  subjectLine: string;
  timeDelay: string;
  unit: TimeEmailMarketingUnit;
  advance?: {
    specificDays: Array<Week>;
    specificTime?: string;
  };
  id: number;
};

