import { Selector } from 'testcafe';
import MainLayout from '../layouts/MainLayout'

const inventory = Selector('#inventory_container')

class Product {
    constructor(nth) {
        this.inventoryItem = inventory.find('.inventory_item').nth(nth)
        this.name = this.inventoryItem.find('.inventory_item_name');
        this.addToCartBtn = this.inventoryItem.find('.btn_inventory');
    }
}

class ProductsPage extends MainLayout {
    constructor(){
        super()
        this.pageTitle = Selector('.product_label')

        this.productList = [
            new Product(0),
            new Product(1),
            new Product(4),
        ]
    }
}

export default new ProductsPage()