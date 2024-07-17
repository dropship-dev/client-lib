import type { AutomationEmailMarketingOptions } from './AutomationEmailMarketingOptions';
export type CreateAutomationEmailMarketingDto = {
    options: Array<AutomationEmailMarketingOptions>;
    senderName: string;
    isActive?: boolean;
    storeId: string;
};
