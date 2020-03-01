<template>
  <div id="app">
    <h1>what up vue 3.0.0-alpha.4 x typescript</h1>
    <router-view>
      <router-link></router-link>
    </router-view>
    <!-- <div id="nav"> -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/closet">Closet</router-link>
    <!-- </div>
    <router-view/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import About from './views/About.vue';
import Closet from './views/Closet.vue';
import Home from './views/Home.vue';

export default defineComponent({
  setup() {
    return {
      main: ref('Hello World'),

    };
  },
  components: {
    About,
    Closet,
    Home,
  },
});
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
