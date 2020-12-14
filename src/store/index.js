import cartStore from './cart'
import userStore from './user'
import productsStore from './products'
import * as products from './../apis/products'
// import { configure } from 'mobx'

// configure({ useProxies: "never" })

class rootStore{
        constructor(){
            this.api = {
                products
            }

            this.cart = new cartStore(this);
            this.user = new userStore(this);
            this.products = new productsStore(this);

            this.storage = localStorage;
        }
}

export default new rootStore();