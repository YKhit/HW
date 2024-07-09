import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class CategoriesDetails extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }
    Buttons = {
        CollapseAndExpandSubcategory: this.MainContainers.CategoriesContainer.locator("(//div[@class='flex-container']//a)[3]"),
    }
    async SelectNecessaryCategory(option: string) {
        await this.MainContainers.CategoriesContainer.locator(`"${option}"`).click();
    }
}