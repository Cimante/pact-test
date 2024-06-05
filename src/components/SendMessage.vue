<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store";

const store = useStore();

const text = defineModel<string>({ default: '' });

const checkText = computed(() => {
  return text.value.replace(/ /g, "").length > 0;
});

function sendMessage(msg: string) {
  if (checkText.value) {
    store.sendMessage(msg);
    text.value = '';
  }
}

</script>

<template>
  <section class="send-message">
    <img class="send-message__smile" src="/src/assets/icons/smile.svg" alt="" />
    <input
      class="send-message__input test-sm"
      placeholder="Напишите сообщение"
      v-model.trim="text"
      @keyup.enter="sendMessage(text)"
    >
    </input>
    <div class="send-message__send-button" :class="{ 'send-message__send-button--active': checkText}" @click="sendMessage(text)">
      <img src="/src/assets/icons/send.svg" alt="" />
    </div>
  </section>
</template>

<style lang="scss">
@import "../styles/variables";

.send-message {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 16px;
  background-color: $white;
  height: 56px;
  margin-bottom: 24px;
  width: 100%;
  padding: 16px;
  border-radius: 12px;

  &__smile,
  &__send-button {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__send-button {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.3;
    transition: opacity 0.3s;

    &--active {
      pointer-events: auto;
      cursor: default;
      opacity: 1;
    }
  }

  &__input {
    width: 100%;
  }
}
</style>
