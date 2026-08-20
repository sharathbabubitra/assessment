import { test, expect } from '../../fixtures/test.fixture';

test.describe("eBay Home Page", () => {

  test('HomePage', async ({ page, eBayUrl }) => {

    await page.goto(eBayUrl);
    
    await expect(page).toHaveTitle(/eBay/i);

    await expect(page.getByPlaceholder('Search for anything')).toBeVisible();

    await expect(page.locator('span', { hasText: 'Shop by category' })).toBeVisible();

    await expect(page.getByRole('link', { name: 'Sign in' }).first()).toBeVisible();

  });
});