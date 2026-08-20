import { test as base, expect } from '@playwright/test';
import testData from '../test-data/testData.json';

type Fixtures = {
  eBayUrl: string;
};

export const test = base.extend<Fixtures>({

  eBayUrl: async ({}, use) => {
    await use(testData.baseUrl);
  },

  page: async ({ page }, use, testInfo) => {

    await use(page);

    const screenshotName = `${testInfo.title}.png`;

    await page.screenshot({
      path: `screenshots/${screenshotName}`,
      fullPage: true
    });
  }
});

export { expect };