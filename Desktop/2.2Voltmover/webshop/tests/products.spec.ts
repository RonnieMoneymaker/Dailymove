import { test, expect } from '@playwright/test';

test('products page lists items and product detail loads', async ({ page }) => {
  await page.goto('/producten');
  const cards = page.locator('a:has(h3)');
  await expect(cards).toHaveCount(6);
  await page.goto('/producten/1');
  await expect(page.getByRole('heading', { level: 1, name: /E-step Model 1/ })).toBeVisible();
});





