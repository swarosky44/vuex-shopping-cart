<template>
  <div class="app">
    <head-bar></head-bar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headBar from './components/HeadBar'
import store from './vuex/store'
export default {
  store,
  components: {
    'head-bar': headBar
  }
}
</script>

<style>
  .app {
    width: 500px;
  }
</style>
