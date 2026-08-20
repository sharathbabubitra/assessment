import { Page, Locator } from '@playwright/test';

export class CategoryPage {

  readonly page: Page;
  readonly shopByCategory: Locator;

  constructor(page: Page) {
    this.page = page;

    this.shopByCategory = page.getByRole('button', {
      name: 'Shop by category'
    });
  }

  async openCategories() {
    await this.shopByCategory.click();
  }

  async selectCategory(categoryName: string) {

    await this.page
      .locator('h3', { hasText: categoryName })
      .click();
  }

  getCategoryHeading(categoryName: string): Locator {

    return this.page.locator('h1', {
      hasText: categoryName
    });
  }
}