import Vue from 'vue'
import App from './App.vue'
import movetool from "../movetool/dist/bundle"
Vue.use(movetool)

new Vue({
  render: h => h(App),
}).$mount('#app')


