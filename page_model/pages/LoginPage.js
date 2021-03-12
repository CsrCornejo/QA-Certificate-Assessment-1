import { Selector, t } from 'testcafe';

class Login {
    constructor(){
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('h3[data-test="error"]')
    }

    async submitLoginForm(username, password) {
        await t
            .typeText(this.usernameField, username, { paste: true })
            .typeText(this.passwordField, password, { paste: true })
            .click(this.loginButton)
    }
}

export default new Login()