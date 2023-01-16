import Vue from 'vue'
import App from './App.vue'
import MeUi from '../src/index'
import '../packages/index.scss'
Vue.use(MeUi)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
