import { test as base, expect } from '@playwright/test';
import apiTestData from '../test-data/apiTestData.json';

type ApiFixtures = {
  petStoreUrl: string;
};

export const test = base.extend<ApiFixtures>({
  petStoreUrl: async ({}, use) => {
    await use(apiTestData.baseUrl);
  },
});

export { expect };