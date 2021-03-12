import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { standardUser } from '../roles/Roles'

fixture('Shopping cart feature testing')

test('Users can navigate to shopping cart page', async t => {
    await t
        .useRole(standardUser)
        .click(ProductsPage.header.shoppingCart)
        .expect(ShoppingCartPage.pageTitle.exists).ok()
})