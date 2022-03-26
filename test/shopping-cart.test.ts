import { chromium } from "playwright";
import { test, expect } from '@playwright/test';

test('Verify shopping cart total basic flow', async ({ page }) => {
    // const browser = await chromium.launch({
    //     headless: false
    // })
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto('https://demoblaze.com/');
    await page.locator('a:has-text("Samsung galaxy s6")').click();
    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=1');
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.message()).toBe('Product added');
        dialog.dismiss().catch(() => { });
    });
    await page.locator('text=Add to cart').click();
    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=1#');
    await page.locator('text=Home (current)').click();
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await page.locator('a:has-text("Nokia lumia 1520")').click();
    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=2');
    page.once('dialog', dialog => {
        expect(dialog.message()).toBe('Product added');
        dialog.dismiss().catch(() => { });
    });
    await page.locator('text=Add to cart').click();
    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=2#');
    await page.locator('#cartur').click();
    await expect(page).toHaveURL('https://demoblaze.com/cart.html');

    await expect(page.locator('#totalp')).toHaveText('1180');
});

test('Verify shopping cart total with deletion', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await page.locator('a:has-text("HTC One M9")').click();
    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=7');
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.message()).toBe('Product added');
        dialog.dismiss().catch(() => { });
    });
    await page.locator('text=Add to cart').click();
    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=7#');
    await page.locator('text=Home (current)').click();
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await page.locator('a:has-text("Nexus 6")').click();
    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=3');
    page.once('dialog', dialog => {
        expect(dialog.message()).toBe('Product added');
        dialog.dismiss().catch(() => { });
    });
    await page.locator('text=Add to cart').click();
    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=3#');
    await page.locator('#cartur').click();
    await expect(page).toHaveURL('https://demoblaze.com/cart.html');
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://demoblaze.com/cart.html#' }*/),
        page.locator('text=HTC One M9700Delete >> a').click()
    ]);
    await expect(page.locator('#totalp')).toHaveText('650');
});


test('Verify modal shopping cart total', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await page.locator('text=Iphone 6 32gb').click();
    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=5');
    page.once('dialog', dialog => {
        expect(dialog.message()).toBe('Product added');
        dialog.dismiss().catch(() => { });
    });
    await page.locator('text=Add to cart').click();
    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=5#');
    await page.locator('#cartur').click();
    await expect(page).toHaveURL('https://demoblaze.com/cart.html');
    await page.locator('button:has-text("Place Order")').click();

    await expect(page.locator('#totalm')).toContainText('790');
});

