<template>
  <section class="send-message">
    <img class="send-message__smile" src="/src/assets/icons/smile.svg" alt="" />
    <input
      class="send-message__input test-sm"
      placeholder="Напишите сообщение"
    >
    </input>
    <div class="send-message__send-button">
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

  &__input {
    width: 100%;
  }
}
</style>
