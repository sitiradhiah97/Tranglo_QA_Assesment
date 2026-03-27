import { Page, expect } from '@playwright/test';

export class Products {
  constructor(private readonly page: Page) {}

  async verifyPageLoaded() {
    // Requirement: All test steps must include appropriate assertions
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async addProductToCart(itemName: string) {
    const formattedName = itemName.toLowerCase().replace(/\s+/g, '-');
    const addToCartButton = this.page.locator(`[data-test="add-to-cart-${formattedName}"]`);
    await addToCartButton.click();
    // Verify badge updates to '1'
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1');
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
