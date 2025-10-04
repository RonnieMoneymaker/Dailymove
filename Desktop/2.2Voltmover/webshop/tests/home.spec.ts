import { test, expect } from '@playwright/test';

test('homepage shows Emovement hero and popular products', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: /Emovement/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Shop nu/i })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: /Populaire producten/i })).toBeVisible();
});



