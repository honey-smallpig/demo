const myPlugin = {
    install(Vue,options) {
        Vue.component('bodying',{
            render(h) {
                return h('h2','插件内混入模式')
            }
        })
    }
}


if(typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(myPlugin)
    
}
