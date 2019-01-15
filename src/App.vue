<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Spark-ui"/>
    <div class="sp-components">
      <h3>Buttons</h3>
      <div class="spark-button-components">
        <sp-button type="primary">Primary</sp-button>
        <sp-button type="danger">Danger</sp-button>
        <sp-button type="warning">Warning</sp-button>
        <sp-button type="success">Success</sp-button>
        <sp-button type="outline">Outline</sp-button>
      </div>
      
      <div class="spark-components-alert">
        <div class="spark-alerts">
          <h3>Alert without Icon</h3><br>
            <sp-alert type="info">This is an example of alert dialog without icon</sp-alert>
            <sp-alert type="danger">This is an example of alert dialog without icon</sp-alert>
            <sp-alert type="warning">This is an example of alert dialog without icon</sp-alert>
            <sp-alert type="success">This is an example of alert dialog without icon</sp-alert>
        </div>

        <div class="spark-alerts">
          <h3>Alert with Icon</h3>
            <sp-alert type="info" icon>This is just an example alert</sp-alert>
            <sp-alert type="danger" icon>This is just an example alert</sp-alert>
            <sp-alert type="warning" icon>This is just an example alert</sp-alert>
            <sp-alert type="success" icon>This is just an example alert</sp-alert>
        </div>
      </div>
      <div class="spark-components-alert">
        <div class="spark-alerts">
          <h3>Dismissable Alert</h3>
            <sp-alert type="info" dismissable>This is just an example alert</sp-alert>
            <sp-alert type="danger" dismissable>This is just an example alert</sp-alert>
            <sp-alert type="warning" dismissable>This is just an example alert</sp-alert>
            <sp-alert type="success" dismissable>This is just an example alert</sp-alert>
        </div>
        <div class="spark-alerts">
          <h3>Dismissable Alert with Icon</h3>
            <sp-alert type="info" icon dismissable>This is just an example alert</sp-alert>
            <sp-alert type="danger" icon dismissable>This is just an example alert</sp-alert>
            <sp-alert type="warning" icon dismissable>This is just an example alert</sp-alert>
            <sp-alert type="success" icon dismissable>This is just an example alert</sp-alert>
        </div>
      </div>

      <h3>Breadcrumbs</h3>
      <div class="spark-components">
        <sp-bcrumb :items="items" />
        <sp-bcrumb :items="items" divider="arrow" />
        <sp-bcrumb :items="items" divider="double-arrow" />
      </div>

      <h3>Modal</h3>
      <sp-button type="success" @click="testing">Open Modal</sp-button>
      <sp-modal>
        a
      </sp-modal>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      items: [
        { name: 'Link 1', href: 'www.google.com' },
        { name: 'Link 2', href: 'www.github.com' },
        { name: 'Link 3', href: 'www.youtube.com', active: true },
      ],
      showModal: false
    }
  },
  methods: {
    testing() {
      alert('hi')
    }
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
  width: 100%;
  margin: 0 auto;
}

.spark-components {
  width: 50%;
  margin: 0 auto;
}

.spark-components div {
  margin: 1em 0;
}

.spark-button-components {
  display: flex;
  justify-content: center;
}

.spark-button-components div {
  margin: 5px;
}

.spark-components-alert {
  display: flex;
  justify-content: space-around;
}

.spark-alerts div {
  margin: 5px
}
</style>
