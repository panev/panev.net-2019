import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
	easing: "ease"
})

Vue.use(VueAnalytics, {
  id: 'UA-132321652-1',
  router
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
