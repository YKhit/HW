import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class ConfiguratorCommon extends BaseApplicationPage {
    constructor(page) {
        super(page);
    };
    Containers = {
        MainContainer: this.page.locator('[class*="configurator-section"]'), 
        SideSummaryContainer: this.page.locator('[id="mainResponderContainer"]')
    };
    Elements = {
        Total: this.Containers.SideSummaryContainer.locator('[data-bind*="totalPrice"]')
    };
    Buttons = {
        AddToQuote: this.Containers.MainContainer.locator('"Add to Quote"'), 
    };
};