import ProductsPage from '../pages/ProductsPage'
import { standardUser } from '../roles/Roles'
import LoginPage from '../pages/LoginPage'

fixture('Logout feature testing')

test('Users can logout', async t => {
    await t
        .useRole(standardUser)
        .click(ProductsPage.header.burgerMenu)
        .click(ProductsPage.sidebar.logout)
        .expect(LoginPage.loginButton.exists).ok()
})