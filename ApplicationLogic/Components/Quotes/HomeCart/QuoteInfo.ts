import { expect } from "@playwright/test";
import {BaseApplicationPage} from "../../../Pages/BaseApplicationPage"; 

export class QuoteInfo extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 
    Containers = {
        MainContainer: this.page.locator('[id="quote-info-section"]'), 
    };
    DropDowns = {
        Status: this.Containers.MainContainer.locator('[id="orderStatusLabelId"]'),
    };
    Buttons = {
        DateCreated: this.Containers.MainContainer.locator('[id="dateCreated"]'), 
        CollapseAndExpand: this.Containers.MainContainer.locator('[title="Collapse/Expand Section"]'),
    }
    async CompareDateCreated(dateToCompare: string){
        const quoteDateCreated = await this.Buttons.DateCreated.innerText();
        await expect(quoteDateCreated).toBe(dateToCompare); 
    };
}