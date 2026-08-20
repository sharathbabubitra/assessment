import { Page, Locator } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly searchBox: Locator;
  readonly shopByCategory: Locator;
  readonly signInLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchBox = page.getByPlaceholder('Search for anything');

    this.shopByCategory = page.locator('span', {
      hasText: 'Shop by category'
    });

    this.signInLink = page.getByRole('link', {
      name: 'Sign in'
    }).first();
  }
}