import type { CombineOperator } from './CombineOperator';
import type { ConditionOperation } from './ConditionOperation';
export type operatorCondition = {
    conditionOperator: Array<ConditionOperation>;
    combineOperator: CombineOperator;
};
