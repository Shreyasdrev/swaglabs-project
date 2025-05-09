import { test, expect } from '@playwright/test';

test('verify cart page functionality', async ({ page }) => {
  await test.step('Verifing page title',async () => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
    const pageTitle = await page.title();
    console.log('Print page title :', pageTitle)
    console.log('Page loaded successfully');
    })
    await test.step('Verifing Login page',async () => {
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.getByText('Products')).toHaveText('Products');
  console.log('Login successful');
  console.log('Product page loaded successfully');
    })
    await test.step('Verifing Cart page',async () => {
  const backPack = await page.getByText('Sauce Labs Backpack').textContent();
  const cleanBackPack = backPack?.trim().toLowerCase() ?? '';
  await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
  const backPackPrice = await page.getByText('$29.99').textContent();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  const cart = page.getByRole('link', { name: '1' });
  const cartText = await cart.textContent();
  await expect(page.getByRole('link', { name: '1' })).toHaveText('1');
  if (cartText === '1') {
    console.log('Cart updated with 1 item successfully');
  }  
  await page.getByRole('link', { name: '1' }).click();
  console.log('Cart icon clicked successfully');
  await expect(page.getByText('Your Cart')).toHaveText('Your Cart');
  console.log('Cart page header verified successfully');
  const cartPgBackPack = await page.getByRole('link', { name: 'Sauce Labs Backpack' }).textContent();
  const cleancartPgBackPack = cartPgBackPack?.trim().toLowerCase() ?? '';
  expect(cleancartPgBackPack).toBe(cleanBackPack);
  console.log('Product name in products page : ' + backPack);
  console.log('Product name in cart page : ' + cleancartPgBackPack);
  console.log('Product name in cart is correct');
  const proPgBackPack = await page.getByText('29.99').textContent();
  const clean = (text: string | null) => text?.replace(/[^0-9.]/g, '').trim() ?? '';
  //Compare the two values after cleaning
  expect(clean(backPackPrice)).toBe(clean(proPgBackPack));
  console.log('Listed price in products page : ' + backPackPrice);
  console.log('Listed price in cart page : ' + proPgBackPack);
  console.log('The backpack price is the same in both pages');
  await expect(page.getByRole('link', { name: 'Continue Shopping' })).toHaveText('Continue Shopping');
  console.log('Continue Shopping link verified successfully');
  await expect(page.getByRole('link', { name: 'CHECKOUT' })).toHaveText('CHECKOUT');
  console.log('Checkout button verified successfully');
  await expect(page.getByRole('button', { name: 'REMOVE' })).toHaveText('REMOVE');
  console.log('Cart page verified successfully');
  await page.getByRole('button', { name: 'REMOVE' }).click();
  console.log('Clicked on Remove button successfully');
  await expect(page.locator('#shopping_cart_container').getByRole('link')).toHaveText('');
  console.log('Cart icon updated successfully');
  await page.getByText('Your Cart').click();
})
});