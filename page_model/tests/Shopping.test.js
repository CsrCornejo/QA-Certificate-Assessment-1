import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import InformationPage from '../pages/InformationPage'
import OverviewPage from '../pages/OverviewPage'
import ConfirmationPage from '../pages/ConfirmationPage'
import { standardUser } from '../roles/Roles'

const dataSet = require('../data/contacts.json');

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
    const productNames = await ProductsPage.addProducts([0])

    await t
        .click(ProductsPage.header.shoppingCart.container)

    await ShoppingCartPage.checkCartItems(productNames)
})

test('Users can add multiple items to shopping cart', async t => {
    const productNames = await ProductsPage.addProducts([1, 4])

    await t
        .click(ProductsPage.header.shoppingCart.container)

    await ShoppingCartPage.checkCartItems(productNames)
})

test('User checkout with missing information', async t => {
    await t
        .click(ProductsPage.header.shoppingCart.container)
        .click(ShoppingCartPage.checkoutBtn)
        .expect(InformationPage.pageTitle.exists).ok()
        .click(InformationPage.continueBtn)
        .expect(InformationPage.errorMessage.exists).ok()
})

dataSet.forEach(contact => {
    test(`Fill ${contact.name} checkout information`, async t => {
        await t
            .click(ProductsPage.header.shoppingCart.container)
            .click(ShoppingCartPage.checkoutBtn)
        
        await InformationPage.submitInformationForm(contact)

        await t
            .expect(OverviewPage.pageTitle.exists).ok()
    })
})


test('User can see correct items at checkout overview', async t => {
    const productNames = await ProductsPage.addProducts([1, 4])
    const [contact] = dataSet

    await t
        .click(ProductsPage.header.shoppingCart.container)
        .click(ShoppingCartPage.checkoutBtn)

    await InformationPage.submitInformationForm(contact)

    await t
        .expect(OverviewPage.pageTitle.exists).ok()

    await OverviewPage.checkCartItems(productNames)
})

test('User can complete a purchase', async t => {
    const productNames = await ProductsPage.addProducts([1])
    const [contact] = dataSet

    await t
        .click(ProductsPage.header.shoppingCart.container)
        .click(ShoppingCartPage.checkoutBtn)

    await InformationPage.submitInformationForm(contact)      

    await t
        .expect(OverviewPage.pageTitle.exists).ok()
        .click(OverviewPage.finishBtn)
        .expect(ConfirmationPage.pageTitle.exists).ok()
})