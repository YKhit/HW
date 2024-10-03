import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class ManageBilling extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }
    Containers = {
        BillingSelectionContainer: this.page.getByLabel('Expanded header'),
        BillingListTable: this.page.locator('[aria-roledescription="Responsive Table"]'),
    }
    InputFields = {
        SubscriptionId: this.Containers.BillingSelectionContainer.getByLabel('Subscription ID'),
        Markets: this.Containers.BillingSelectionContainer.getByRole('combobox', { name: 'Markets:' }),
    }
    Buttons = {
        GoButton: this.Containers.BillingSelectionContainer.getByRole('button', { name: 'Go' }),
        BillingSelection: this.Containers.BillingListTable.getByRole('gridcell', { name: 'Item Selection' }),
    }
}