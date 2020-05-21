<template>
  <div id="app">
    <app-quote>
        <h2 slot="title">Hello World</h2>
        <h5 slot="content">Hello Again</h5>
    </app-quote>
    <!-- v- then the name of the directive -->
    <!-- <p v-highlight>This should have a green background</p> -->

    <!-- <p v-highlight = "'red'">This should have a red background</p> -->

    <!-- <p v-highlight.delay = "'red'">This should have a red background</p> -->


<!-- Mixins HTML -->
    <!-- <ul>
      <li v-for="lan in languages">{{lan}}</li>
    </ul> -->
  </div>
</template>

<script>
// mixin import
// import { mixinExample } from './Quote.js'
import Quote from './Quote.vue';
export default {
  // mixin array
  // mixins: [mixinExample],
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appQuote: Quote
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
