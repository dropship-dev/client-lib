import type { FixedCostInfo } from './FixedCostInfo';
import type { PercentageCostInfo } from './PercentageCostInfo';
export type PrismaJson_PlatformCostInfo = Record<string, (FixedCostInfo | PercentageCostInfo)>;
