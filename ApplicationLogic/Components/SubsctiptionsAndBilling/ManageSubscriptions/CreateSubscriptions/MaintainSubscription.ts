import { BaseApplicationPage } from "../../../../Pages/BaseApplicationPage";

export class MaintainSubscriptions extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }
    Containers = {
        HeaderSubscriptionInfoContainer: this.page.locator("//header[@aria-label='Object header area']//div"),
    }
    Titles = {
        SubscriptionNumber: this.Containers.HeaderSubscriptionInfoContainer.locator("//div[@data-sap-ui='application-Subscriptions-list-component---subscriptionView--subscriptionDocumentNumber']//span[1]"),
    }
}