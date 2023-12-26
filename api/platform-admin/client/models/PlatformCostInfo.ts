/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FixedCostInfo } from './FixedCostInfo';
import type { PercentageCostInfo } from './PercentageCostInfo';

/**
 * key is "1", "2", etc
 * stand for set 1, set 2, etc
 */
export type PlatformCostInfo = Record<string, (FixedCostInfo | PercentageCostInfo)>;
