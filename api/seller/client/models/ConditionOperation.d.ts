import type { NameConditionDto } from './NameConditionDto';
import type { PriceConditionDto } from './PriceConditionDto';
import type { TagConditionDto } from './TagConditionDto';
export type ConditionOperation = (NameConditionDto | TagConditionDto | PriceConditionDto);
