import { Selector } from 'testcafe';
import CartList from '../layouts/CartList'

class OverviewPage extends CartList {
    constructor(){
        super()
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Overview')
    }
}

export default new OverviewPage()