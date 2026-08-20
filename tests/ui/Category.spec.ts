import { test, expect } from '../../fixtures/test.fixture';
import testData from '../../test-data/testData.json';
import { CategoryPage } from '../../pages/Category';

test.describe('eBay Category', () => {
  
  test('Category', async ({ page }) => {

    const categoryPage = new CategoryPage(page);

    const categoryValue = testData.categories[0];

    await categoryPage.openCategories();
    
    await categoryPage.selectCategory(categoryValue);

    // Verify category page title
    await expect(page).toHaveTitle(new RegExp(categoryValue, 'i'));

    // Verify category heading
    await expect(categoryPage.getCategoryHeading(categoryValue)).toBeVisible();
  });
});