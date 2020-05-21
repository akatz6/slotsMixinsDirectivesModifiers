<template>
  <div>
    <div class="title">
          <slot name="title"></slot>
    </div>

    <div class="content">
          <slot name="content"></slot>
    </div>
      <!-- This is a filter, the function is after the pipe (|)
    <p>{{text | uppercase}}</p> -->


    <!-- Mixins HTML -->
    <!-- <ul>
      <li v-for="lan in languages">{{lan}}</li>
    </ul> -->
  </div>
</template>

<script>
// mixin import
// import { mixinExample } from './Quote.js'
export default {
  // mixin array
  // mixins: [mixinExample],
  data () {
    return {
      text: "This is a filter"
    }
  },

  // filters: {
  //   uppercase(value){
  //     return value.toUpperCase();
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  div{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
    background-color:red;
    color:blue;
  }

  .title{
    font-style: italic;
    background-color:green;
  }

  .content{
    background-color:pink;
  }


</style>
