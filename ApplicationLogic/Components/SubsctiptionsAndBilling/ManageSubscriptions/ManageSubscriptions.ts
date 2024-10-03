import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class ManageSubscriptions extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }
    Containers = {
        SubscriptionsListContainer: this.page.locator('[id*="contentFitContainer"]'),
    }
    Buttons = {
        Create: this.Containers.SubscriptionsListContainer.locator('"Create"'),
    }
}