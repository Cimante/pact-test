<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  expand: Boolean,
  focused: Boolean,
  lastMessage: Object,
  chatTitle: String,
  unreadMessages: Number,
});

const messageTime = computed(() => {
  return `${props.lastMessage?.time.getHours()}:${props.lastMessage?.time.getMinutes()}`;
});
</script>

<template>
  <section
    class="chat-preview"
    :class="{
      'chat-preview--expand': expand,
      'chat-preview--focused': focused,
    }"
  >
    <div class="chat-preview__avatar"></div>
    <div class="chat-preview__content">
      <div class="chat-preview__header">
        <div class="chat-preview__title chat-preview__title--verified title">
          {{ chatTitle }}
        </div>
        <div class="chat-preview__date text-xs">
          {{ messageTime }}
        </div>
      </div>
      <div class="chat-preview__text">
        <span class="chat-preview__text-preview text-sm">
          {{ lastMessage?.from === "self" ? "Вы: " : "" }}
          {{ lastMessage?.text }}
        </span>
        <div
          class="chat-preview__unread"
          v-if="unreadMessages && unreadMessages > 0"
        >
          {{ unreadMessages }}
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../styles/variables";

.chat-preview {
  height: 72px;
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-template-rows: 48px 1fr;
  align-items: center;
  gap: 0 16px;
  padding: 12px 16px;
  background-color: $white;
  transition: background-color 0.2s;
  cursor: pointer;

  &--expand {
    width: 100%;
  }

  &:hover,
  &--focused {
    background-color: rgba($navy-grey, 0.04);
  }

  &__title {
    white-space: nowrap;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: $iceberg-blue;
  }

  &__date {
    color: $navy-grey;
  }

  &__header,
  &__text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__text-preview {
    height: 17px;
    max-width: 250px;
    padding-right: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: $navy-grey;
  }

  &__unread {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: $light-green;
    color: white;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
