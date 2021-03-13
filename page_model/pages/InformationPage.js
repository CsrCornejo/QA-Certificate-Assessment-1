import { Selector, t } from 'testcafe';
import MainLayout from '../layouts/MainLayout'

const form = Selector('.checkout_info_wrapper')

class InformationPage extends MainLayout {
    constructor(){
        super()
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Your Information')
        this.continueBtn = form.find('input.cart_button')
        this.errorMessage = form.find('h3[data-test="error"]')

        this.firstNameField = form.find('#first-name')
        this.lastNameField = form.find('#last-name')
        this.postalCodeField = form.find('#postal-code')
    }

    async submitInformationForm({ name, lastname, zipcode }) {
        await t
            .typeText(this.firstNameField, name, { paste: true })
            .typeText(this.lastNameField, lastname, { paste: true })
            .typeText(this.postalCodeField, zipcode, { paste: true })
            .click(this.continueBtn)
    }
}

export default new InformationPage()