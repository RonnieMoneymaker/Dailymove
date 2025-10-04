import { test, expect } from '@playwright/test';

test('over and contact pages render', async ({ page }) => {
  await page.goto('/over');
  await expect(page.getByRole('heading', { level: 1, name: /Over Emovement/ })).toBeVisible();

  await page.goto('/contact');
  await expect(page.getByRole('heading', { level: 1, name: /Contact/ })).toBeVisible();
});




