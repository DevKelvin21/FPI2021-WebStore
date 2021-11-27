import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import VueBootstrapToasts from "vue-bootstrap-toasts";

Vue.use(VueBootstrapToasts)

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
