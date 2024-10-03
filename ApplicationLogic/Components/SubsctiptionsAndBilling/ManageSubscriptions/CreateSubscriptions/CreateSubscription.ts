import { BaseApplicationPage } from "../../../../Pages/BaseApplicationPage";

export class CreateSubscriptions extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }
    Containers = {
        SubscriptionsCreationForm: this.page.locator("//div[contains(@class,'sapUiRespGrid sapUiRespGridHSpace0')]"),
        SubscriptionsCreationFormFooter: this.page.getByLabel('Footer actions'),
        ProductSearch: this.page.locator("//ul[contains(@class, 'sapMListItems sapMListUl sapMListShowSeparatorsAll sapMListModeSingleSelectMaster')]"),
    }
    Buttons = {
        OpenProductSearch: this.Containers.SubscriptionsCreationForm.locator("//span[@data-sap-ui='application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--productInput-vhi']"),
        Continue: this.Containers.SubscriptionsCreationFormFooter.locator("//span[@id='application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--btnCreateSubscriptionOkDialog-inner']//span[1]"),
        SelectProduct: async (product: string) => await this.Containers.ProductSearch.locator(`"${product}"`).click(),
    }
    InputFields = {
        Customer: this.Containers.SubscriptionsCreationForm.locator("//div[@id='__input6-content']//input[1]"),
        Market: this.Containers.SubscriptionsCreationForm.getByRole('combobox', { name: 'Market' }),
        MainProduct: this.Containers.SubscriptionsCreationForm.getByRole('textbox', { name: 'Main Product' }),
        ValidityDate: this.Containers.SubscriptionsCreationForm.getByPlaceholder('e.g. Dec 31,'),
        InitialFixedTerm: this.Containers.SubscriptionsCreationForm.getByLabel('Initial Fixed Term'),
        SubscriptionProfile: this.Containers.SubscriptionsCreationForm.getByRole('combobox', { name: 'Subscription Profile' }),
    }
    async FillCreationForm(customerName: string, marketName: string, mainProduct: string, validityDate: string, initialFixedTerm: string, subscriptionProfile: string) {
        await this.InputFields.Customer.fill(customerName);
        await this.InputFields.Market.fill(marketName);
        await this.InputFields.MainProduct.fill(mainProduct);
        await this.Buttons.OpenProductSearch.click();
        await this.Buttons.SelectProduct(mainProduct);
        await this.InputFields.ValidityDate.fill(validityDate);
        await this.InputFields.InitialFixedTerm.fill(initialFixedTerm);
        await this.InputFields.SubscriptionProfile.fill(subscriptionProfile);
    }
}