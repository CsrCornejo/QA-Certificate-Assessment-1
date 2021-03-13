import { Selector } from 'testcafe';

const shoppingCart = Selector('#shopping_cart_container')

class MainLayout {
    constructor(){
        this.header = {
            appLogo: Selector('.app_logo'),
            burgerMenu: Selector('#react-burger-menu-btn'),
            shoppingCart: {
                container: shoppingCart,
                badge: shoppingCart.find('.shopping_cart_badge')
            }
        }

        this.sidebar = {
            logout: Selector('#logout_sidebar_link')
        }
    }
}

export default MainLayout