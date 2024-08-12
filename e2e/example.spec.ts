import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/'); // переход на сайт
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText('Playwright enables reliable end-to-end testing for modern web apps.'); // проверка соответствия заголовка
});