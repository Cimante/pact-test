<script setup lang="ts">
import { defineComponent } from "vue";
import Chat from "./Chat.vue";

defineComponent({
  components: {
    Chat,
  },
});
</script>

<template>
  <section class="sidebar">
    <header class="sidebar__header">
      <div class="sidebar__menu-toggle">
        <img src="/src/assets/menu-icon.svg" alt="" />
      </div>
      <div class="sidebar__search">
        <img src="/src/assets/search.svg" class="search-icon" />
        <input class="search-input" placeholder="Поиск" />
      </div>
    </header>
    <div class="sidebar__list">
      <Chat />
      <Chat />
      <Chat />
    </div>
  </section>
</template>

<style lang="scss">
@import "../styles/variables";

.sidebar {
  display: flex;
  flex-direction: column;
  width: 364px;
  height: 100%;

  &__header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 8px 16px;
    gap: 0 16px;
  }

  &__list {
    height: inherit;
    overflow-y: scroll;
    overflow-x: hidden;

    -ms-overflow-style: none; /* Edge, Internet Explorer */
    scrollbar-width: none; /* Firefox */
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__menu-toggle {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__search {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 22px;
    background-color: $light-grey;
    padding: 8px 16px;
  }

  .search-input {
    background: none;
    border: none;
    outline: none;
    margin-left: 4px;
  }
}
</style>
