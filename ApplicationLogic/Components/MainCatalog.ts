import { BaseApplicationPage } from "../Pages/BaseApplicationPage";

export class MainCatalog extends BaseApplicationPage {
    constructor(page) {
        super(page)
    }; 
    Containers = {
        ContentContainer: this.MainContainers.HomeContainer.locator('[class*="catalog-products"]')
    }
    Buttons = {
        Configure: this.Containers.ContentContainer.locator('"Configure"'),
    };
    ClickOnButtons = {
        Configure: async (productName: string) => this.page.locator(`((((((//a[contains(text(), "${productName}")]//parent::*))[1]//parent::*))[1]/following-sibling::div))[6]//div[contains(@class, "config-button")]`).click(),
    };
}