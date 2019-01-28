<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Frontend Tools for <span class="vue-js">Vue</span> Components
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-js {
    text-decoration: underline;
    color: #4fc08d;
    font-weight: bold;
  }
</style>
