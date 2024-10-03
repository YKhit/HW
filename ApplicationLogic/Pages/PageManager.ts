import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { ManageSubscriptions } from "../Components/SubsctiptionsAndBilling/ManageSubscriptions/ManageSubscriptions";
import { CreateSubscriptions } from "../Components/SubsctiptionsAndBilling/ManageSubscriptions/CreateSubscriptions/CreateSubscription";
import { FillSubscriptions } from "../Components/SubsctiptionsAndBilling/ManageSubscriptions/CreateSubscriptions/FillSubscription";
import { MaintainSubscriptions } from "../Components/SubsctiptionsAndBilling/ManageSubscriptions/CreateSubscriptions/MaintainSubscription";
import { ManageBilling } from "../Components/SubsctiptionsAndBilling/ManageBilling/ManageBilling";
import { HeaderMenu } from "../Components/HeaderMenu/HeaderMenu";

export class PageManager {
    page: Page;
    baseApplicationPage;
    loginPage;
    manageSubscriptions;
    createSubscriptions;
    fillSubscriptions;
    maintainSubscriptions;
    manageBilling;
    headerMenu;

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.manageSubscriptions = new ManageSubscriptions(page);
        this.createSubscriptions = new CreateSubscriptions(page); 
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.fillSubscriptions = new FillSubscriptions(page);
        this.headerMenu = new HeaderMenu(page);
        this.maintainSubscriptions = new MaintainSubscriptions(page);
        this.manageBilling = new ManageBilling(page);
    };
};