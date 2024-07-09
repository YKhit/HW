import { expect } from "@playwright/test";
import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class Totals extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 
    Containers = {
        MainContainer: this.page.locator('[id="totals-section"]')
    }; 
    Fields = {
        Price: this.Containers.MainContainer.locator('[class="numberCell"] [data-bind*="css"]').last(),
    };
    async CompareTotals(TotalToCompare: string){
        await expect(TotalToCompare).toBe((await this.Fields.Price.innerText())); 
    };
}