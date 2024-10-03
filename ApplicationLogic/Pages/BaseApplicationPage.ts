import { BasePage } from "./BasePage";

export class BaseApplicationPage extends BasePage {
    constructor(page) {
        super(page)
    }; 
    MainContainers = {
//        FilterBarContainer: this.page.locator('[class="sapFDynamicPageHeaderWrapper"]'),
        SubscriptionsAndBillingContainer: this.page.locator('//h2[@title="Subscriptions and Billing"]/../../..//ul'),
        HeaderContainer: this.page.getByLabel('Shell Bar'),
    }
    Tiles = { 
        ManageSubscriptions: this.MainContainers.SubscriptionsAndBillingContainer.locator('//a[contains(@aria-label, "Manage Subscriptions")]'),
        ManageBillingData: this.MainContainers.SubscriptionsAndBillingContainer.locator('//a[contains(@aria-label, "Manage Billing Data")]'),
    }
    async Delay (time: number) {
        const delay = new Promise(resolve => setTimeout(resolve, time));
        return delay;
    }
}