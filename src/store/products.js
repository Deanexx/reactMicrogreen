import { makeObservable, observable, action, computed } from 'mobx'

class Products{
    items = [];

    constructor(rootStore){
        this.rootStore = rootStore;
        this.api = this.rootStore.api.products

        makeObservable(this, {
            items: observable,
            getAll: action,
            getPopular: computed
        })
    }

     async getAll(){
        let res = await this.api.getAll();

        if(res.status === 'success')
            this.items = res.data;
    }

    get getPopular(){
        return this.items.data.filter(el => el.popular)
    }
}

export default Products;