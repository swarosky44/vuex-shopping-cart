import App from './App'
import store from './vuex/store'
import router from './router'
import {sync} from 'vuex-router-sync'

/* eslint-disable no-new */
/* 将vuex和vue-route同步管理 */
sync(store, router)

router.start(App, '#app')
