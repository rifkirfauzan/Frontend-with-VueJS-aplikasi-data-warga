import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

//import components
import WargaIndex from './components/warga/Index'
import WargaCreate from './components/warga/Create'
import WargaEdit from './components/warga/Edit'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'warga',
      component: WargaIndex
    },
    {
      path: '/create',
      name: 'create',
      component: WargaCreate
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: WargaEdit
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')