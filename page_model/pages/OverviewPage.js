import { Selector } from 'testcafe';
import MainLayout from '../layouts/MainLayout'

class OverviewPage extends MainLayout {
    constructor(){
        super()
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Overview')
    }
}

export default new OverviewPage()