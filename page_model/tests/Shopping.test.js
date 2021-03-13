import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { standardUser } from '../roles/Roles'

fixture('Shopping cart feature testing')

test('Users can navigate to shopping cart page', async t => {
    await t
        .useRole(standardUser)
        .click(ProductsPage.header.shoppingCart.container)
        .expect(ShoppingCartPage.pageTitle.exists).ok()
})

test('Users can add 1 item to shopping cart', async t => {
    // Destructuring assignment, it can be merged with smart assertion
    const [{ name: productName, addToCartBtn }] = ProductsPage.productList;
    const [{ name: cartItemName }] = ShoppingCartPage.itemList;

    // Smart Assertions to be calculated later
    const productNameAssertion = productName.innerText;
    const cartItemNameAssertion = cartItemName.innerText;

    // Test steps
    await t
        .useRole(standardUser)

    const productNameText = await productNameAssertion;

    await t
        .click(addToCartBtn)
        .expect(ProductsPage.header.shoppingCart.badge.innerText).eql('1')
        .click(ProductsPage.header.shoppingCart.container)
        .expect(cartItemNameAssertion).eql(productNameText)
})