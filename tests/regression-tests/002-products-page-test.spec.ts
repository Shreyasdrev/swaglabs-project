import { test, expect } from '@playwright/test';

test('Verify products page', async ({ page }) => {
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
    })
    await test.step('Verifing Products page and features',async () => {
  await page.getByText('carry.allTheThings() with the');
  await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toHaveText('Sauce Labs Backpack');
  await expect(page.getByText('$29.99')).toHaveText('$29.99');
  console.log('Product name and price are displayed correctly');
  await page.getByRole('combobox').selectOption('lohi');
  console.log('Sorting by price low to high');
  const prices = await page.$$eval('.product-price', elements =>
    elements.map(el => {
      const text = el.textContent?.replace(/[^0-9.]/g, '') ?? '0';
      return parseFloat(text);
    })
  );

  // Check if prices are sorted in ascending order
  const isPriceSorted = prices.every((val, i, arr) => i === 0 || arr[i - 1] <= val);

  // Assert
  expect(isPriceSorted).toBe(true);
  console.log('Prices are sorted from low to high successfully');
  await expect(page.getByText('$7.99ADD TO CART')).toContainText('$7.99');
  await page.getByText('$9.99ADD TO CART').click();
  await page.getByText('$15.99').first().click();
  await page.getByText('$15.99').nth(1).click();
  await page.getByText('$29.99').click();
  await expect(page.getByText('$49.99')).toContainText('$49.99');
  await page.getByRole('combobox').selectOption('hilo');
  console.log('Sorting by price high to low');
  await page.getByText('$49.99').click();
  await page.getByText('$7.99').click();
  await page.getByRole('combobox').selectOption('za');
  await page.getByRole('combobox').selectOption('az');
  console.log('Sorting by name A-Z');
   // Get all product names
   const productNames = await page.$$eval('.product-name', elements =>
   elements.map(el => el.textContent?.trim().toLowerCase() ?? '')
 );

 // Check if names are sorted alphabetically (A-Z)
  const isNameSorted = productNames.every((val, i, arr) =>
   i === 0 || arr[i - 1].localeCompare(val) <= 0
 );

 // Assert the result
 expect(isNameSorted).toBe(true);
 console.log('Product names are sorted from A-Z successfully');
  await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
  await page.getByRole('button', { name: '<- Back' }).click();
  console.log('Back button clicked successfully');
   // Get all product names
   const productNamesAfter = await page.$$eval('.product-name', elements =>
   elements.map(el => el.textContent?.trim().toLowerCase() ?? '')
 );

 // Check if names are sorted alphabetically (A-Z)
  const isNameSortedAfter = productNamesAfter.every((val, i, arr) =>
   i === 0 || arr[i - 1].localeCompare(val) <= 0
 );

 // Assert the result
 expect(isNameSortedAfter).toBe(true);
 console.log('Product names are sorted from A-Z successfully');
  
})
});