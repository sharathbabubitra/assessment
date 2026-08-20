import { test, expect } from '../../fixtures/test.fixture';
import testData from '../../test-data/testData.json';

test.describe('eBay Category', () => {
  
  test('Category', async ({ page, eBayUrl }) => {

    // Get the category value from test data
    const categoryValue = testData.categories[0];
    
    await page.goto(eBayUrl);
    
    await page.getByRole('button', { name: 'Shop by category' }).click();

    await page.locator('h3', { hasText: categoryValue }).click();

    await expect(page).toHaveTitle(new RegExp(categoryValue, 'i'));

    await expect(page.locator('h1', { hasText: categoryValue })).toBeVisible();

  });
});