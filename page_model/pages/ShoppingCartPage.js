import { Selector } from 'testcafe';
import MainLayout from '../layouts/MainLayout'

const cart = Selector('#cart_contents_container')
const cartItems = cart.find('.cart_item')

class Item {
    constructor(nth) {
        this.cartItem = cartItems.nth(nth)
        this.name = this.cartItem.find('.inventory_item_name');
    }
}

class ShoppingCartPage extends MainLayout {
    constructor(){
        super()
        this.pageTitle = Selector('.subheader').withExactText('Your Cart')
        this.cartItems = cartItems

        this.itemList = [
            new Item(0),
            new Item(1),
            new Item(2),
        ]
    }
}

export default new ShoppingCartPage()