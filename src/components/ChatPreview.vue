<template>
  <section class="chat-preview">
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
  width: 100%;
  height: 72px;
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-template-rows: 48px 1fr;
  align-items: center;
  gap: 0 16px;
  padding: 13px;
  background-color: $white;
  transition: background-color 0.2s;
  cursor: default;

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
    width: 246px;
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
