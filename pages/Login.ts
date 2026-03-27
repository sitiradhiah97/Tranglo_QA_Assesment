import { Page } from '@playwright/test';

export class Login {
  constructor(private readonly page: Page) {}

  async navigate() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(user: string, pass: string) {
    // Requirement: Use stable selectors ([data-test])
    await this.page.locator('[data-test="username"]').fill(user);
    await this.page.locator('[data-test="password"]').fill(pass);
    await this.page.locator('[data-test="login-button"]').click();
  }
}
