import { Selector, t } from 'testcafe';
import MainLayout from './MainLayout';

const cartList = Selector('.cart_list')
const cartItems = cartList.find('.cart_item')

class CartItem {
    constructor(nth) {
        this.cartItem = cartItems.nth(nth)
        this.name = this.cartItem.find('.inventory_item_name');
    }
}

class CartList extends MainLayout {
    constructor(){
        super()
        this.cartList = cartList
        this.cartItems = cartItems
    }

    async checkCartItems(items) {
        const countItems = await this.cartItems.count

        await t
            .expect(items.length).eql(countItems)

        for (let i=0; i < countItems; i++) {
            const cartItem = new CartItem(i)
            const cartItemName = await cartItem.name.innerText
    
            await t
                .expect(items).contains(cartItemName)
        }
    }
}

export default CartList