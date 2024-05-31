<template>
  <section class="chat">
    <div class="chat__avatar"></div>
    <div class="chat__content">
      <div class="chat__header">
        <div class="chat__title chat__title--verified">Чат 1</div>
        <div class="chat__date">18:16</div>
      </div>
      <div class="chat__text">
        <span class="chat__text-preview">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <div class="chat__unread">1</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../styles/variables";

.chat {
  width: 100%;
  height: 72px;
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-template-rows: 48px 1fr;
  align-items: center;
  gap: 0 16px;
  padding: 13px;
  background-color: #fff;
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

  &__header,
  &__text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  &__date {
    font-size: 12px;
    line-height: 16px;
  }

  &__text-preview {
    font-size: 14px;
    font-weight: 400;
    height: 16px;
    width: 168px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
