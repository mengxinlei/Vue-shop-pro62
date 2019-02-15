import Vue from 'vue'
import App from './App'
import router from './router'


// 引入css文件
import './assets/css/global.css'

// 引入axios并配置



// 引入图标字体
import './assets/font/iconfont.css'

// 引入elemrnt-ui组件库
import ElmentUI from 'element-ui'
Vue.use(ElmentUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
