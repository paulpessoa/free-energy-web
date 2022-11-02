import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './scss/_variables.scss'   // import global app style file
import axios from 'axios'

axios.defaults.baseURL = 'https://sirtsliudmxjunjcavql.supabase.co/rest/v1';
axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpcnRzbGl1ZG14anVuamNhdnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU5ODE2NzIsImV4cCI6MTk4MTU1NzY3Mn0.YwAQ-saTJSrm_3OHBLIuYgV8ZDDSdU1hiuPyP24KAHI';




Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
