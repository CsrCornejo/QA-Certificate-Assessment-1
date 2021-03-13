import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { standardUser } from '../roles/Roles'

fixture('Shopping cart feature testing')
    .beforeEach(async t => {
        await t
            .useRole(standardUser)
    })

test('Users can navigate to shopping cart page', async t => {
    await t
        .click(ProductsPage.header.shoppingCart.container)
        .expect(ShoppingCartPage.pageTitle.exists).ok()
})

test('Users can add 1 item to shopping cart', async t => {
    // Destructuring assignment, it can be merged with smart assertion
    const [{ name: productName, addToCartBtn }] = ProductsPage.productList
    const [{ name: cartItemName }] = ShoppingCartPage.itemList

    // Smart Assertions to be calculated later
    const productNameAssertion = productName.innerText
    const cartItemNameAssertion = cartItemName.innerText

    // Test steps after useRole
    const productNameText = await productNameAssertion

    await t
        .click(addToCartBtn)
        .expect(ProductsPage.header.shoppingCart.badge.innerText).eql('1')
        .click(ProductsPage.header.shoppingCart.container)
        .expect(cartItemNameAssertion).eql(productNameText)
})

test.only('Users can add multiple items to shopping cart', async t => {
    // Destructuring assignment, it can be merged with smart assertion
    const productNames = []

    for (const product of ProductsPage.productList) {
        const productName = await product.name.innerText
        productNames.push(productName)

        await t
            .click(product.addToCartBtn)
    }

    await t
        .expect(ProductsPage.header.shoppingCart.badge.innerText).eql(ProductsPage.productList.length.toString())
        .click(ProductsPage.header.shoppingCart.container)
        .expect(ShoppingCartPage.cartItems.count).eql(ProductsPage.productList.length)
    

    for (const cartItem of ShoppingCartPage.itemList) {
        const cartItemName = await cartItem.name.innerText

        await t
            .expect(productNames).contains(cartItemName)
    }

})