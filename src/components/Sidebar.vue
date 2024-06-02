<script setup lang="ts">
import { defineComponent } from "vue";
import ChatPreview from "./ChatPreview.vue";

defineComponent({
  components: {
    ChatPreview,
  },
});
</script>

<template>
  <section class="sidebar">
    <header class="sidebar__header">
      <div class="sidebar__menu-toggle">
        <img src="/src/assets/icons/menu-icon.svg" alt="" />
      </div>
      <div class="sidebar__search">
        <img src="/src/assets/icons/search.svg" class="search-icon" />
        <input class="search-input" placeholder="Поиск" />
      </div>
    </header>
    <div class="sidebar__list">
      <ChatPreview />
      <ChatPreview />
      <ChatPreview />
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
  border-right: 1px solid $light-grey-2;

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
