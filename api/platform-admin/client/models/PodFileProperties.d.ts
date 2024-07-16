import type { PodFilePropertiesLabel } from './PodFilePropertiesLabel';
import type { PodFilePropertiesValue } from './PodFilePropertiesValue';
export type PodFileProperties = {
    isSelected?: boolean;
    value: PodFilePropertiesValue;
    label: PodFilePropertiesLabel;
};
