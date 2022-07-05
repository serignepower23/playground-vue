<template>
  <div id="app">
    <PvMenuBar />
    <div class="app-container">
      <img alt="Vue logo" src="./assets/primevue-logo.png" />
      <HelloWorld msg="Welcome to Your PrimeVue App" />
      <form @submit.prevent="greet">
        <PvButton
          :model="value"
          label="bello"
          icon="pi pi-check"
          :isIconed="true"
        />
        <h3>{{ message }}</h3>
      </form>
    </div>
    <Menu :model="arr" :popup="false" />
    <Toast />
    <Button label="Submit" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script>
import PvMenuBar from "./components/PvMenuBar.vue";
import PvButton from "./components/PvButton.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
    return {
      message: null,
      arr: [
        {
          label: "ciao",
        },
      ],
      value: null,
    };
  },
  methods: {
    greet() {
      this.$toast.add({ severity: "info", summary: "Hello " + this.text });
      this.message = "Hello " + this.text;
    },
  },
  components: {
    HelloWorld,
    PvButton,
    PvMenuBar,
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.app-container {
  text-align: center;
}

body #app .p-button {
  margin-left: 0.2em;
}

form {
  margin-top: 2em;
}
</style>