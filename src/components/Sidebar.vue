<script setup lang="ts">
import { defineComponent } from "vue";
import ChatPreview from "./ChatPreview.vue";
import { useStore } from "../store";

const store = useStore();

defineComponent({
  components: {
    ChatPreview,
  },
});
</script>

<template>
  <section class="sidebar" :class="{ 'sidebar--active': store.isSidebarOpen }">
    <header class="sidebar__header">
      <div class="sidebar__menu-toggle" @click="store.toggleSidebar()">
        <img src="/src/assets/icons/menu-icon.svg" alt="" />
      </div>
      <div class="sidebar__search">
        <img src="/src/assets/icons/search.svg" class="search-icon" />
        <input class="search-input" placeholder="Поиск" />
      </div>
    </header>
    <div class="sidebar__list">
      <ChatPreview :expand="store.isSidebarOpen" />
      <ChatPreview :expand="store.isSidebarOpen" />
      <ChatPreview :expand="store.isSidebarOpen" />
    </div>
  </section>
</template>

<style lang="scss">
@import "../styles/variables";

.sidebar {
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100%;
  border-right: 1px solid $light-grey-2;
  transition: all 0.3s;

  &--active {
    width: 364px;

    .sidebar__search {
      opacity: 1;
      width: 100%;
      padding: 8px 16px;
    }
  }

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
    min-width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  &__search {
    display: flex;
    align-items: center;
    height: 100%;
    width: 0;
    border-radius: 22px;
    background-color: $light-grey;
    padding: 0;
    opacity: 0;
    transition: all 0.3s;
  }

  .search-input {
    background: none;
    border: none;
    outline: none;
    margin-left: 4px;
  }
}
</style>
