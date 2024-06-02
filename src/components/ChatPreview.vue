<script setup lang="ts">
defineProps({
  expand: Boolean,
});
</script>

<template>
  <section class="chat-preview" :class="{ 'chat-preview--expand': expand }">
    <div class="chat-preview__avatar"></div>
    <div class="chat-preview__content">
      <div class="chat-preview__header">
        <div class="chat-preview__title chat-preview__title--verified title">
          Чат 1
        </div>
        <div class="chat-preview__date text-xs">18:16</div>
      </div>
      <div class="chat-preview__text">
        <span class="chat-preview__text-preview text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <div class="chat-preview__unread">1</div>
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
  cursor: default;

  &--expand {
    width: 100%;
  }

  &:hover {
    background-color: rgba($navy-grey, 0.04);
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
    height: 16px;
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
