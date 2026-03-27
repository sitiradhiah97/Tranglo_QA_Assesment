import { Page, expect } from '@playwright/test';

export class Checkout {
  constructor(private readonly page: Page) {}

  async fillDetails(first: string, last: string, zip: string) {
    await this.page.locator('[data-test="firstName"]').fill(first);
    await this.page.locator('[data-test="lastName"]').fill(last);
    await this.page.locator('[data-test="postalCode"]').fill(zip);
    await this.page.locator('[data-test="continue"]').click();
  }

  async finishOrder() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async verifySuccess() {
    const message = this.page.locator('.complete-header');
    await expect(message).toHaveText('Thank you for your order!');
  }
}
