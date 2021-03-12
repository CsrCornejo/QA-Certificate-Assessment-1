import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

test('Users can login using valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductsPage.pageTitle.exists).ok()
})

test('Users cannot login using invalid password', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)

    await t.expect(LoginPage.errorMessage.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})

