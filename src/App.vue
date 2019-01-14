<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Spark-ui"/>
    <div class="sp-components">
      <h3>Buttons</h3>
      <div class="spark-buttons">
        <sp-button type="primary">Primary</sp-button>
        <sp-button type="danger">Danger</sp-button>
        <sp-button type="warning">Warning</sp-button>
        <sp-button type="success">Success</sp-button>
        <sp-button type="outline">Outline</sp-button>
      </div>
      
      <h3></h3>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.sp-components {
  width: 80%;
  margin: 0 auto;
}

.spark-buttons {
  display: flex;
  justify-content: center;
}
.spark-buttons div {
  margin: 3px
}
</style>
