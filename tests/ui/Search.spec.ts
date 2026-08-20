import { test, expect } from '../../fixtures/test.fixture';
import testData from '../../test-data/testData.json';
import { SearchPage } from '../../pages/SearchPage';

test.describe('eBay Search', () => {

  test('Search', async ({ page }) => {

    // Create Search Page object
    const searchPage = new SearchPage(page);

    // Get search value from test data
    const searchValue = testData.search[0];

    // Search for the product
    await searchPage.searchProduct(searchValue);

    // Verify search results page
    await expect(page).toHaveTitle(
      new RegExp(searchValue, 'i')
    );

    // Verify search box contains searched value
    await expect(searchPage.searchBox)
      .toHaveValue(searchValue);

  });
});