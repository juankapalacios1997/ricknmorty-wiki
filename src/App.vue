<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <!-- <rickAndMortyAPI name="Parth" @pepe="getPepe"/> -->
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import rickAndMortyAPI from './components/rickAndMortyAPI.vue';

export default {
  name: 'App',
  components: {
    rickAndMortyAPI
  },
  // methods: {
  //   getPepe(item) {
  //     console.log(item)
  //   }
  // }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: gray;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: silver;
}

nav a.router-link-exact-active {
  color: gold;
}
</style>
