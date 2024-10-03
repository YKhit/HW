import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class HeaderMenu extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Buttons = {
        HomeButton: this.MainContainers.HeaderContainer.getByRole('button', { name: 'SAP Logo' }),
    }
}