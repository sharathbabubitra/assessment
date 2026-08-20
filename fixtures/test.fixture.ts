import { test as base, expect } from '@playwright/test';
import testData from '../test-data/testData.json';

type Fixtures = {
  eBayUrl: string;
};

export const test = base.extend<Fixtures>({

  eBayUrl: async ({}, use) => {
    await use(testData.baseUrl);
  },

  page: async ({ page, eBayUrl }, use, testInfo) => {

    // Navigate to eBay before every test
    await page.goto(eBayUrl);

    await use(page);

    // Capture full-page screenshot after the test
    const screenshotName = `${testInfo.title}.png`;

    await page.screenshot({
      path: `screenshots/${screenshotName}`,
      fullPage: true
    });
  }
});

export { expect };