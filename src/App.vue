<script setup lang="ts"></script>

<template>
  <main class="App">
    <section class="sidebar">
      <header class="sidebar__header">
        <div class="sidebar__menu-toggle"></div>
        <div class="sidebar__search"></div>
      </header>
      <div class="sidebar__list"></div>
    </section>
    <section class="messages"></section>
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
  border: 1px solid blue;
}

.sidebar {
  width: 364px;
  height: 100%;
  border: 1px solid red;

  &__header {
    width: 100%;
    height: 56px;
    border: 1px solid green;
  }
}

.messages {
  width: 100%;
  height: 100%;
  background-color: $iceberg-blue;
}
</style>
