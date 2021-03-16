import { Selector } from 'testcafe';
import CartList from '../layouts/CartList'

const cartContainer = Selector('#checkout_summary_container')

class OverviewPage extends CartList {
    constructor(){
        super()
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Overview')
        this.finishBtn = cartContainer.find('a.cart_button')
    }
}

export default new OverviewPage()