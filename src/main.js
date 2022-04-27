import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(Vuelidate, VueCompositionAPI)

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
