import { Selector } from 'testcafe';
import CartList from '../layouts/CartList'

const cartContainer = Selector('#cart_contents_container')

class ShoppingCartPage extends CartList {
    constructor(){
        super()
        this.pageTitle = Selector('.subheader').withExactText('Your Cart')
        this.checkoutBtn = cartContainer.find('.checkout_button')
    }
}

export default new ShoppingCartPage()