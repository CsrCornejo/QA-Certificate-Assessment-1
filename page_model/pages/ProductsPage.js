import { Selector, t } from 'testcafe';

class ProductsPage {
    constructor(){
        this.pageTitle = Selector('.product_label')
    }
}

export default new ProductsPage()