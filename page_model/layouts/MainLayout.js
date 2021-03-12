import { Selector } from 'testcafe';

class MainLayout {
    constructor(){
        this.header = {
            appLogo: Selector('.app_logo'),
            burgerMenu: Selector('#react-burger-menu-btn'),
            shoppingCart: Selector('#shopping_cart_container')
        }

        this.sidebar = {
            logout: Selector('#logout_sidebar_link')
        }
    }
}

export default MainLayout