import { test, expect } from '@playwright/test';

test('verify login with valid credentials', async ({ page }) => {
  await test.step('Verifing page title',async () => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  const pageTitle = await page.title();
  console.log('Print page title :', pageTitle)
  console.log('Page loaded successfully');
  })
  await test.step('Verifing login page',async () => {
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  console.log('Username entered successfully');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  console.log('Password entered successfully');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  console.log('Login button clicked successfully');
  await expect(page.getByText('Products')).toHaveText('Products');
  console.log('Login successful');
})
});