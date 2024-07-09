import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { CategoriesDetails } from "../Components/Categories/CategoriesDetails";
import { MainCatalog } from "../Components/MainCatalog";
import { AsusZen } from "../Components/Configurator/ProductAttributes/AsusZen";
import { ConfiguratorCommon } from "../Components/Configurator/ConfiguratorCommon";
import { QuoteInfo } from "../Components/Quotes/HomeCart/QuoteInfo";
import { QuoteHeader } from "../Components/Quotes/QuoteHeader";
import { Products } from "../Components/Quotes/HomeCart/Products";
import { Totals } from "../Components/Quotes/HomeCart/Totals";  

export class PageManager {
    page: Page;
    loginPage;
    categoriesDetails;
    mainCatalog;
    asusZen;
    configuratorCommon;
    quoteInfo;
    quoteHeader;
    products;
    totals;

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.categoriesDetails = new CategoriesDetails(page);
        this.mainCatalog = new MainCatalog(page);
        this.asusZen = new AsusZen(page);
        this.configuratorCommon = new ConfiguratorCommon(page);
        this.quoteInfo = new QuoteInfo(page);
        this.quoteHeader = new QuoteHeader(page);
        this.products = new Products(page);
        this.totals = new Totals(page);
    };
};