<template>
  <section class="Chat">
    <header class="Chat__header">
      <div class="Chat__avatar"></div>
      <div class="Chat__info">
        <span class="Chat__title title">Чат 1</span>
        <div class="Chat__last-seen text-sm">в сети 5 мин назад</div>
      </div>
      <div class="Chat__controls">
        <div class="search"></div>
        <div class="phone"></div>
        <div class="submenu"></div>
      </div>
    </header>
    <div class="Chat__content"></div>
  </section>
</template>

<style lang="scss">
@import "../styles/variables";

.Chat {
  width: 100%;
  height: 100%;
  background-color: $iceberg-blue;

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
      display: block;
      width: 40px;
      height: 40px;
      background-color: $light-green;
    }
  }
}
</style>
