import { test as base } from '@playwright/test'; 
import { PageManager } from '../ApplicationLogic/Pages/PageManager';
import { CredsEnum } from '../ApplicationLogic/Enums/CredsEnum'

export type TestOptions = {
    domain: string
}
export const test = base.extend<TestOptions & {pageManager: PageManager}> ({
    domain: ['', {option: true}], 
    page: async ({page}, use) => {
        await page.goto('/');
        await new PageManager(page).loginPage.LogIn(CredsEnum.Login, CredsEnum.Password);
        await use(page);
    },
    pageManager: async ({page}, use) => {
        const pageManager = new PageManager(page); 
        await use(pageManager); 
    }, 
});