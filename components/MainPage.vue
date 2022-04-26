<template>
  <div id="app">
    <h3>Example of Reusable Modal using Slot</h3>
    <button type="button" class="btn" @click="openModal()">Open Modal</button>
    <ModalLarge v-show="visible" @close="close"> </ModalLarge>
  </div>
</template>

<script>
import ModalLarge from "@/components/ModalLarge";

export default {
  name: "App",
  components: {
    ModalLarge,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    openModal() {
      this.visible = true;
      let bodyLock = document.querySelector("body");
      bodyLock.classList.add("lock");
    },
    close() {
      this.visible = false;
      let bodyLock = document.querySelector("body");
      bodyLock.classList.remove("lock");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  background-color: rgb(96, 96, 214);
  color: #fff;
  border-radius: 4px;
  padding: 8px;
  border: none;
  font-weight: bold;
}
</style>
