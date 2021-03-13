import { Selector } from 'testcafe';
import MainLayout from '../layouts/MainLayout'

const cart = Selector('#cart_contents_container')

class Item {
    constructor(nth) {
        this.cartItem = cart.find('.cart_item').nth(nth)
        this.name = this.cartItem.find('.inventory_item_name');
    }
}

class ShoppingCartPage extends MainLayout {
    constructor(){
        super()
        this.pageTitle = Selector('.subheader').withExactText('Your Cart')

        this.itemList = [
            new Item(0)
        ]
    }
}

export default new ShoppingCartPage()