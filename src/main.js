// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Import jquery and bootstrap
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

// Import firebase
import firebase from 'firebase'

// Import ElementUI and data-table
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import DataTables from 'vue-data-tables'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI,{ locale })
Vue.use(DataTables)

// Import axios, sweetalert
import axios from 'axios'
import sweetalert from 'sweetalert'
import 'sweetalert/dist/sweetalert.css'


//Import vue table-2
import vuetable from 'vuetable-2'

Vue.use(vuetable)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
