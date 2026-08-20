import { Page, Locator } from '@playwright/test';

export class SearchPage {

  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchBox = page.getByPlaceholder('Search for anything');

    this.searchButton = page.getByRole('button', {
      name: 'Search'
    }).last();
  }

  async searchProduct(searchValue: string) {

    await this.searchBox.fill(searchValue);

    await Promise.all([
      this.page.waitForURL(/\/sch\//),
      this.searchButton.click()
    ]);
  }
}