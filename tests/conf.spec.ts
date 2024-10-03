import { test } from './BaseTest';

test.describe('LogIn process', () => {
    test('Main chain', async ({pageManager}) => {
      await pageManager.baseApplicationPage.Delay(5000);
      await pageManager.baseApplicationPage.Tiles.ManageSubscriptions.click();
      await pageManager.baseApplicationPage.Delay(4000);
      await pageManager.manageSubscriptions.Buttons.Create.click();
      await pageManager.createSubscriptions.FillCreationForm('Artur Losevs', 'EUR', '12', 'Sep 30, 2024', '12', 'default');
//      const marketNameSaved = await pageManager.createSubscriptions.InputFields.Market.innerText();
      await pageManager.createSubscriptions.Buttons.Continue.click();
      await pageManager.baseApplicationPage.Delay(6000);
      await pageManager.fillSubscriptions.FillHeaderInfo('Sep 30, 2024');
      await pageManager.fillSubscriptions.FillSubscriptionTermsInfo('5');
      await pageManager.fillSubscriptions.Buttons.AllowExpiration.click();
      await pageManager.fillSubscriptions.Buttons.SubscriptionCreate.click();
      await pageManager.baseApplicationPage.Delay(2000);
      const subscriptionNumberSaved = await pageManager.maintainSubscriptions.Titles.SubscriptionNumber.innerText();
      await pageManager.headerMenu.Buttons.HomeButton.click();
      await pageManager.baseApplicationPage.Tiles.ManageBillingData.click();
      await pageManager.manageBilling.InputFields.SubscriptionId.fill(subscriptionNumberSaved);
//      await pageManager.manageBilling.InputFields.Markets.fill(marketNameSaved);
      await pageManager.baseApplicationPage.Delay(2000);
      await pageManager.manageBilling.Buttons.GoButton.click();
      await pageManager.baseApplicationPage.Delay(2000);
      await test.expect(pageManager.manageBilling.Buttons.BillingSelection).toBeVisible();
  }); 
});