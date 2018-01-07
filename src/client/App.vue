<style lang="less">

</style>
<template>
  <div class="app full-height">
    <h1>{{ message }}</h1>
    <router-link :to="{ name: 'hello' }">Goto Hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Express + Vue boilerplate-Konata9'
    }
  }
}
</script>
