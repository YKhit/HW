import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class AsusZen extends BaseApplicationPage {
    constructor(page) {
        super(page);
    };
    ChooseAttributes = {
        HardDrive: async (param: string) => await this.page.locator(`//span[contains(.,"${param}")]/preceding-sibling::input//parent::*/parent::*`).click(), 
        OpticalDrive: async (param: string) => await this.page.locator(`//span[contains(.,"${param}")]/preceding-sibling::input//parent::*/parent::*`).click(), 
    };
};