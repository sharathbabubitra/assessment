import { test, expect } from '../../fixtures/test.fixture';
import { HomePage } from '../../pages/HomePage';

test.describe("eBay Home Page", () => {

  test('HomePage', async ({ page }) => {

    const homePage = new HomePage(page);

    await expect(page).toHaveTitle(/eBay/i);

    await expect(homePage.searchBox).toBeVisible();

    await expect(homePage.shopByCategory).toBeVisible();

    await expect(homePage.signInLink).toBeVisible();

  });
});