import { test, expect } from '@playwright/test';

test.describe('eBay Category Page', () => {
  test('Category Page Verification', async ({ page }) => {
    await page.goto('https://www.ebay.com/');
    
    await page.getByRole('button', { name: 'Shop by category' }).click();

    await page.locator('h3', { hasText: 'Electronics' }).click();

    await expect(page).toHaveTitle(/Electronics/);

    await expect(page.locator('h1', { hasText: 'Electronics' })).toBeVisible();

    await page.screenshot({
        path: 'screenshots/categoryPage.png',
        fullPage: true
    });    
  });
});