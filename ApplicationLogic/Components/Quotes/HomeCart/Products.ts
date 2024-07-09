import { expect } from "@playwright/test";
import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class Products extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 
    Containers = {
        MainContainer: this.page.locator('[id="items-section"]'),
    };
    async ValidateProducts(productName: string, productSubcategoryName: string){
        await expect(this.Containers.MainContainer.locator('[id="itemsTable"]').nth(0)).toContainText(productName);
        await expect(this.Containers.MainContainer.locator("//tbody[@id='itemsTable']/tr[2]/td[2]/div[1]")).toContainText(productSubcategoryName);
    };
}