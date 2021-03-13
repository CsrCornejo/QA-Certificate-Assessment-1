import { Selector } from 'testcafe';
import MainLayout from '../layouts/MainLayout'

const form = Selector('.checkout_info_wrapper')

class InformationPage extends MainLayout {
    constructor(){
        super()
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Your Information')
        this.continueBtn = form.find('input.cart_button')
        this.errorMessage = form.find('h3[data-test="error"]')
    }
}

export default new InformationPage()