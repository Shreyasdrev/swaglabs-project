import { test, expect } from '@playwright/test';

test('Verify product details page', async ({ page }) => {
  const clean = (text: string | null) => text?.replace(/[^0-9.]/g, '').trim() ?? '';
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
  await expect(page.getByText('Products')).toBeVisible();
  console.log('Login successful');
    })
    
  const backPackDetails = await page.getByText('carry.allTheThings() with the').textContent();
  const cleanBackPackDetails = backPackDetails?.trim().toLowerCase() ?? '';
  const backPackName = await page.getByRole('link', { name: 'Sauce Labs Backpack' }).textContent();
  const cleanBackPackName = backPackName?.trim().toLowerCase() ?? '';
  const backPackPrice = await page.getByText('$29.99').textContent();
  const cleanBackPackPrice = clean(backPackPrice);


  await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
  console.log('Selected product successfully : ' + backPackName);
    
    await test.step('Verifing Product details page',async () => {
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  const pDPgbackPackDetails = await (page.getByText('carry.allTheThings() with the')).textContent();
  const cleanPDPgBackPackDetails = pDPgbackPackDetails?.trim().toLowerCase() ?? '';
  const pDPgbackPackName = await (page.getByText('Sauce Labs Backpack')).textContent();
  const cleanPDPgBackPackName = pDPgbackPackName?.trim().toLowerCase() ?? '';

  console.log('Product details page loaded successfully');
  expect(cleanPDPgBackPackName).toBe(cleanBackPackName);
  console.log('Product name in products page : ' + cleanBackPackName);
  console.log('Product name in product details page : ' + cleanPDPgBackPackName);
  console.log('Product name in product details page is correct');

  expect(cleanPDPgBackPackDetails).toBe(cleanBackPackDetails);
  console.log('Product details in products page : ' + cleanBackPackDetails);
  console.log('Product details in product details page : ' + cleanPDPgBackPackDetails);
  console.log('Product details in product details page and products page are same');
  await page.getByText('Sauce Labs Backpack').click();
  const pDPgbackPackPrice = await page.getByText('$29.99').textContent();
  const cleanPDPgBackPackPrice = clean(pDPgbackPackPrice);
  expect(cleanPDPgBackPackPrice).toBe(cleanBackPackPrice);
  console.log('Product price in products page : ' + cleanBackPackPrice);
  console.log('Product price in product details page : ' + cleanPDPgBackPackPrice);
  console.log('Product price in product details page and products page are same');
  
  await page.getByRole('button', { name: '<- Back' }).click();
  console.log('Back button clicked successfully');
  const bikeLightName = await page.getByText('Sauce Labs Bike Light').textContent();
  const cleanBikeLightName = bikeLightName?.trim().toLowerCase() ?? '';
  const bikeLightPrice = await page.getByText('$9.99').textContent();
  const cleanBikeLightPrice = clean(bikeLightPrice);
  const bikeLightDetails = await page.getByText('A red light isn\'t the desired').textContent();
  const cleanBikeLightDetails = bikeLightDetails?.trim().toLowerCase() ?? '';
  
  await page.getByRole('link', { name: 'Sauce Labs Bike Light' }).click();
  await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
  console.log('Selected product successfully : ' + bikeLightName);
  const pDPgBikeLightName = await page.getByText('Sauce Labs Bike Light').textContent();
  const cleanPDPgBikeLightName = pDPgBikeLightName?.trim().toLowerCase() ?? '';
  const pDPgBikeLightDetails = await page.getByText('A red light isn\'t the desired').textContent();
  const cleanPDPgBikeLightDetails = pDPgBikeLightDetails?.trim().toLowerCase() ?? '';
  const pdPageBikeLightPrice = await page.getByText('$9.99').textContent();
  const cleanPDPageBikeLightPrice = clean(pdPageBikeLightPrice);
  
expect(cleanPDPgBikeLightName).toBe(cleanBikeLightName);
  console.log('Product name in products page : ' + cleanBikeLightName);
  console.log('Product name in product details page : ' + cleanPDPgBikeLightName);
  console.log('Product name in product details page is correct');
  expect(cleanPDPgBikeLightDetails).toBe(cleanBikeLightDetails);
  console.log('Product details in products page : ' + cleanBikeLightDetails);
  console.log('Product details in product details page : ' + cleanPDPgBikeLightDetails);
  console.log('Product details in product details page and products page are same');
  expect(cleanPDPageBikeLightPrice).toBe(cleanBikeLightPrice);
  console.log('Product price in products page : ' + cleanBikeLightPrice);
  console.log('Product price in product details page : ' + cleanPDPageBikeLightPrice);
  console.log('Product price in product details page and products page are same');

})
    });