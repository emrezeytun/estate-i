<template>
  <div id="app">
    <Header />
    sss
    <router-view />
  </div>
</template>

<script>
import { Header } from '@/components';

export default {
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
