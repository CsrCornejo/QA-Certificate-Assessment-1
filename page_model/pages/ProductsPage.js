import { Selector, t } from 'testcafe';
import MainLayout from '../layouts/MainLayout'

class ProductsPage extends MainLayout {
    constructor(){
        super()
        this.pageTitle = Selector('.product_label')
    }
}

export default new ProductsPage()