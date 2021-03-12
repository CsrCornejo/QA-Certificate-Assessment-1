import { Selector } from 'testcafe';
import MainLayout from '../layouts/MainLayout'

class ShoppingCartPage extends MainLayout {
    constructor(){
        super()
        this.pageTitle = Selector('.subheader').withExactText('Your Cart')
    }
}

export default new ShoppingCartPage()