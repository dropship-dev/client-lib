import type { CombineOperator } from './CombineOperator';
import type { ConditionOperation } from './ConditionOperation';
export type ConditionCollection = {
    combineOperator: CombineOperator;
    conditionOperator: Array<ConditionOperation>;
};
