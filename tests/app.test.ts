import { test, expect, chromium } from "@playwright/test";

test("Initial React Page", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://localhost:3000/");
  await expect(page.getByText(/Learn React/i)).toBeInViewport();
  await page.waitForTimeout(5000);
});
