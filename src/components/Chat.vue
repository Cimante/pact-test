<script setup lang="ts">
import { defineComponent } from "vue";
import MessageItem from "./MessageItem.vue";
import SendMessage from "./SendMessage.vue";

defineComponent({
  components: {
    MessageItem,
    SendMessage,
  },
});
</script>

<template>
  <section class="Chat">
    <header class="Chat__header">
      <div class="Chat__avatar"></div>
      <div class="Chat__info">
        <span class="Chat__title title">Чат 1</span>
        <div class="Chat__last-seen text-sm">в сети 5 мин назад</div>
      </div>
      <div class="Chat__controls">
        <div class="search">
          <img src="/src/assets/icons/search.svg" alt="" />
        </div>
        <div class="phone">
          <img src="/src/assets/icons/call.svg" alt="" />
        </div>
        <div class="submenu">
          <img src="/src/assets/icons/menu-more.svg" alt="" />
        </div>
      </div>
    </header>
    <section class="Chat__body">
      <div class="Chat__content">
        <div class="Chat__date-label text-sm">Сегодня</div>
        <MessageItem class="white" />
        <MessageItem class="color" />
        <MessageItem class="white" />
      </div>
      <div class="Chat__form">
        <SendMessage />
      </div>
    </section>
  </section>
</template>

<style lang="scss">
@import "../styles/variables";

.Chat {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: $iceberg-blue;

  @media screen and (max-width: 1280px) {
    min-width: 384px;
  }

  &__header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 16px;
    background-color: $white;
    border-bottom: 1px solid $light-grey-2;
  }

  &__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: $iceberg-blue;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 16px;
  }

  &__last-seen {
    color: $navy-grey;
  }

  &__controls {
    display: flex;
    gap: 8px;
    margin-left: auto;
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
    }
  }

  &__body {
    padding: 0 32px;
  }

  &__content {
    display: inline-flex;
    flex-direction: column;
    margin-top: auto;
    width: 100%;
    gap: 16px 0;

    & > .Message:nth-child(odd) {
      margin-left: auto;
    }

    & > .Message:nth-child(even) {
      margin-right: auto;
    }
  }

  &__date-label {
    margin: 0 auto;
    color: $white;
    padding: 4px 12px;
    background-color: rgba($dark-blue, 0.6);
    border-radius: 12px;
  }

  &__form {
    margin-top: 16px;
  }
}
</style>
