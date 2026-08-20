import { test, expect } from '../../fixtures/test.fixture';

test.describe('eBay Search', () => {

  test('Search', async ({ page, eBayUrl }) => {
    
    await page.goto(eBayUrl);
    
    await page.getByPlaceholder('Search for anything').fill('laptop');

    await Promise.all([
      page.waitForURL(/\/sch\//),
      page.getByRole('button', { name: 'Search' }).last().click(),
    ]);

    await expect(page).toHaveTitle(/laptop/i);

    await expect(page.getByPlaceholder('Search for anything')).toHaveValue('laptop');

  });
});