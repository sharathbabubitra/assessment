import { test, expect } from '@playwright/test';

test.describe('eBay Search', () => {
  test('Search functionality', async ({ page }) => {
    await page.goto('https://www.ebay.com/');  
    
    await page.getByPlaceholder('Search for anything').fill('laptop');

    await Promise.all([
      page.waitForURL(/\/sch\//),
      page.getByRole('button', { name: 'Search' }).last().click(),
    ]);

    await expect(page).toHaveTitle(/laptop/i);

    await expect(page.getByPlaceholder('Search for anything')).toHaveValue('laptop');

    await page.screenshot({
      path: 'screenshots/searchResults.png',
      fullPage: true
    });
  });
});