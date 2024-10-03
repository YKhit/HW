import { BaseApplicationPage } from "./BaseApplicationPage";

export class LoginPage extends BaseApplicationPage {
    constructor(page) {
        super(page);
    };
    TextBoxes = {
        Login: this.page.locator("//input[contains(@placeholder, 'E-Mail')]"),
        Password: this.page.locator("//input[contains(@name, 'password')]"),
    };
    Buttons = {
        ConfirmLogin: this.page.locator("//button[contains(@type, 'submit')]"),
        SignIn: this.page.locator("//button[text()='Sign in']"),
    };
    async LogIn(login: string, password: string) {
        await this.TextBoxes.Login.fill(login);
        await this.Buttons.ConfirmLogin.click();
        await this.Delay(5000);
        await this.TextBoxes.Password.fill(password); 
        await this.Buttons.SignIn.click();
        await this.Delay(8000);
    }
};