<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">{{this.$router.currentRoute}}</text>
    <a @click="jump('/')">Home</a>
    <a @click="jump('/secondpage')">Page 2</a>
    <router-view></router-view>
  </div>
</template>

<script>
// import router from '@/router.js'

export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  methods: {
    jump (go) {
      this.$router.push({ path: go })
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
  a {
    font-size: 42px;
  }
</style>
