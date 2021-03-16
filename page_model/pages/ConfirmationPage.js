import { Selector, t } from 'testcafe';
import MainLayout from '../layouts/MainLayout'

class ConfirmationPage extends MainLayout {
    constructor(){
        super()
        this.pageTitle = Selector('.subheader').withExactText('Finish')
    }
}

export default new ConfirmationPage()