import Main from '@pages/Main'
import Contacts from '@pages/Contacts'
import Cart from '@pages/Cart'
import LogReg from '@pages/LogReg'

let routes = [
    {
        name: "main",
        url: '/',
        component: Main,
        exact: true
    },
    {
        name: "contact",
        url: '/contact',
        component: Contacts,
        exact: true
    },
    {
        name: "cart",
        url: '/cart',
        component: Cart,
        exact: true
    },
    {
        name: "logReg",
        url: '/logReg',
        component: LogReg,
        exact: true
    }
]

let routersMap = {};

routes.map(el => {
    if(!el.hasOwnProperty('name'))
        return null;
    routersMap[el.name] = el.url;
})

let urlBuilder = function(name, params){
    if(!routersMap.hasOwnProperty(name))
        return null;

    let url = routersMap[name];

    for (let key in params){
        url = url.replace(":" + key, params[key])
    }
    return url;
}

export default routes;
export {routersMap, urlBuilder}