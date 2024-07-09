import {test as base, Page} from '@playwright/test'; 
import { PageManager } from '../ApplicationLogic/Pages/PageManager';

export type TestOptions = {
    domain: string
}
export const test = base.extend<TestOptions & {pageManager: PageManager}> ({
    domain: ['', {option: true}], 

    page: async ({page}, use) => {
        await page.goto('/');
        await use(page);
    },

    pageManager: async ({page}, use) => {
        const pageManager = new PageManager(page); 
        await use(pageManager); 
    }, 
});