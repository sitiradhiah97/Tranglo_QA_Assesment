import { Page, expect } from '@playwright/test';

export class Cart {
  constructor(private readonly page: Page) {}

  async verifyItemInCart(expectedName: string) {
    const itemName = this.page.locator('.inventory_item_name');
    await expect(itemName).toHaveText(expectedName);
  }

  async checkout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}
