import { test, expect } from '@playwright/test';

const pages = ['/', '/producten', '/producten/1', '/winkelwagen', '/afrekenen', '/over', '/contact'];

test('capture screenshots of key pages', async ({ page }, testInfo) => {
  for (const p of pages) {
    await page.goto(p);
    await page.waitForLoadState('networkidle');
    const file = p === '/' ? 'home' : p.replaceAll('/', '_').replace(/^_/, '');
    await expect(page).toHaveScreenshot(`${file}.png`, { fullPage: true });
  }
});


