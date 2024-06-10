import { test, expect } from '@playwright/test';

test('Test title', async ({ page }) => {
  await page.goto('https://claritylabs-tst.cpq.cloud.sap/Login.aspx?cookie_refresh=1');
  await page.locator('form#aspnetForm>div:nth-of-type(8)>div>div>div>div>div:nth-of-type(3)>ul>li:nth-of-type(1)>input').fill('aleonenko');
  await page.locator('form#aspnetForm>div:nth-of-type(8)>div>div>div>div>div:nth-of-type(3)>ul>li:nth-of-type(2)>input').fill('StrongPassword123!');
  await page.locator("form#aspnetForm>div:nth-of-type(8)>div>div>div>div>div:nth-of-type(3)>ul>li:nth-of-type(5)>input").click();
  await expect(page).toHaveURL('https://claritylabs-tst.cpq.cloud.sap/Catalogue/CategoryTree.aspx');
  await expect(page.locator("//a[@href='/quotation/LoadQuote.aspx']")).toBeVisible();
  await expect(page.locator("(//a[@href='/Catalogue/CategoryTree.aspx'])[2]")).toBeVisible();
  await expect(page.locator("(//li[@data-bind='css: { hidden : !tryIsAdmin }']//a)[3]")).toBeVisible();
  await expect(page.locator("//h3[text()='iTunes Store']")).toBeVisible();
});
