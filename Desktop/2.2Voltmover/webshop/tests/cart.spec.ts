import { test, expect } from '@playwright/test';

test('add to cart from product detail navigates to cart', async ({ page }) => {
  await page.goto('/producten/2');
  await page.getByLabel('Aantal').fill('2');
  await page.getByRole('button', { name: /Toevoegen aan winkelwagen/i }).click();
  await expect(page).toHaveURL(/\/winkelwagen/);
  await expect(page.getByRole('heading', { level: 1, name: /Winkelwagen/ })).toBeVisible();
});




