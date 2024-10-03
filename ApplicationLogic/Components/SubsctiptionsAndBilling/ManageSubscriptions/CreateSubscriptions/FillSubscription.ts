import { BaseApplicationPage } from "../../../../Pages/BaseApplicationPage";

export class FillSubscriptions extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }
    Containers = {
        HeaderInfoContainer: this.page.getByRole('region', { name: 'Header Info' }),
        SubscriptionTermsContainer: this.page.getByRole('region', { name: 'Subscription Terms' }),
        SubscriptionFooter: this.page.getByRole('toolbar', { name: 'Footer actions'}),
    }

    InputFields = {
        ReferenceDate: this.Containers.HeaderInfoContainer.getByRole('textbox', { name: 'Reference Date'}),
        WithDrawalPeriod: this.Containers.SubscriptionTermsContainer.getByLabel('Withdrawal Period'),
    }

    Buttons = {
        AllowExpiration: this.Containers.SubscriptionTermsContainer.getByLabel('Allow Mid-Billing Cycle'),
        SubscriptionCreate: this.Containers.SubscriptionFooter.getByLabel('Create'),
    }

    async FillHeaderInfo(referenceDate: string) {
        await this.InputFields.ReferenceDate.fill(referenceDate);
    }
    async FillSubscriptionTermsInfo(withdrawalPeriod: string) {
        await this.InputFields.WithDrawalPeriod.fill(withdrawalPeriod);
    }
}