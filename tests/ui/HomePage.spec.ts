import { test, expect } from '@playwright/test';

test.describe("eBay Home Page", () => {
  test('Home Page Verification', async ({ page }) => {
    await page.goto('https://www.ebay.com/');
    
    await expect(page).toHaveTitle(/eBay/);

    await expect(page.getByPlaceholder('Search for anything')).toBeVisible();

    await expect(page.locator('span', { hasText: 'Search' })).toBeVisible();

    await expect(page.locator('span', { hasText: 'Shop by category' })).toBeVisible();

    await expect(page.getByRole('link', { name: 'Sign in' }).first()).toBeVisible();

    await page.screenshot({ 
        path: 'screenshots/homePage.png', 
        fullPage: true });
  });
});