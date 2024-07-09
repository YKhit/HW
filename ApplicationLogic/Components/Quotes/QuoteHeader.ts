import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class QuoteHeader extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 
    Containers = {
        CartHeaderContainer: this.page.locator('[class*="cart-header-"]'),
    };
    Buttons = {
        SaveQuote: this.Containers.CartHeaderContainer.locator('[role="button"]').locator('"Save Quote"'),
    };
}