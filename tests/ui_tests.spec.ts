import { test } from '@playwright/test';
import { Login } from '../pages/Login';
import { Products } from '../pages/Products';
import { Cart } from '../pages/Cart';
import { Checkout } from '../pages/Checkout';

test('Tranglo Assignment - Complete Purchase Flow', async ({ page }) => {
  const login = new Login(page);
  const products = new Products(page);
  const cart = new Cart(page);
  const checkout = new Checkout(page);

  const product = 'Sauce Labs Backpack';

  await test.step('1. Navigate to the login page', async () => {
    await login.navigate();
  });

  await test.step('2. Log in using credentials', async () => {
    await login.login('standard_user', 'secret_sauce');
  });

  await test.step('3. Confirm that the products page loads successfully', async () => {
    await products.verifyPageLoaded();
  });

  await test.step('4. Add product to the shopping cart', async () => {
    await products.addProductToCart(product);
  });

  await test.step('5. Open the cart and verify correct item', async () => {
    await products.goToCart();
    await cart.verifyItemInCart(product);
  });

  await test.step('6. Proceed to checkout and complete fields', async () => {
    await cart.checkout();
    await checkout.fillDetails('QA', 'Candidate', '55100');
  });

  await test.step('7. Finalise the purchase', async () => {
    await checkout.finishOrder();
  });

  await test.step('8. Validate order confirmation message', async () => {
   await checkout.verifySuccess();
  });
});
