import { Selector, t } from 'testcafe';
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
    }

    async addProducts(indexes) {
        const productNames = []
        // const allItems = await this.productList
        for (const index of indexes) {
            const product = new Product(index)
            const productName = await product.name.innerText
            productNames.push(productName)
    
            await t
                .click(product.addToCartBtn)
        }

        await t
            .expect(this.header.shoppingCart.badge.innerText).eql(productNames.length.toString())

        return productNames
    }
}

export default new ProductsPage()