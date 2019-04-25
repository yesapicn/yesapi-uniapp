import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

//挂载全局变量okayapiHost
Vue.prototype.okayapiHost="填写您的域名信息";

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
