import { test } from './BaseTest';
import { CredsEnum } from '../Enums/CredsEnum';
import {setTimeout} from "node:timers/promises";

test.describe('LogIn process', () => {
    test.beforeEach(async ({pageManager}) => {
        await pageManager.loginPage.LogIn(CredsEnum.Login, CredsEnum.Password);
    });
    test('Main chain', async ({pageManager}) => {
      await pageManager.categoriesDetails.Buttons.CollapseAndExpandSubcategory.click();
      await pageManager.categoriesDetails.SelectNecessaryCategory('QA:Laptops');
      await pageManager.mainCatalog.ClickOnButtons.Configure('ASUS Zan');
      await pageManager.asusZen.ChooseAttributes.HardDrive('HD150'); 
      await pageManager.asusZen.ChooseAttributes.OpticalDrive('DVD12X');
      await setTimeout(1000);
      const TotalQuoteSum = await pageManager.configuratorCommon.Elements.Total.innerText();
      await pageManager.configuratorCommon.Buttons.AddToQuote.click();
      await pageManager.quoteInfo.DropDowns.Status.selectOption({ label: 'VN Preparing' });
      await pageManager.quoteInfo.CompareDateCreated(new Date().toISOString().slice(0, 10).split('-').reverse().join('/').replace('/20','/'));
      await pageManager.products.ValidateProducts('ASUL', 'DVD12X');
      await pageManager.totals.CompareTotals(TotalQuoteSum.slice(1));
      await pageManager.quoteHeader.Buttons.SaveQuote.click();
  }); 
});
