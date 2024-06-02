<script setup lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Chat from "./components/Chat.vue";

defineComponent({
  components: {
    Sidebar,
    Chat,
  },
});
</script>

<template>
  <main class="App">
    <Sidebar />
    <Chat />
  </main>
</template>

<style lang="scss">
@import "./styles/normalize";
@import "./styles/variables";
@import "./styles/styles";

.App {
  position: relative;
  width: 1280px;
  height: 720px;
  display: flex;
  align-items: center;
}

.messages {
  width: 100%;
  height: 100%;
  background-color: $iceberg-blue;
}
</style>
