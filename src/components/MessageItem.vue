<script setup lang="ts">
import { defineComponent } from "vue";
import MessageCheck from "./MessageCheck.vue";

defineComponent({
  components: {
    MessageCheck,
  },
});
</script>

<template>
  <section class="Message">
    <div class="Message__text">Lorem Ipsum</div>
    <div class="Message__info">
      <span class="Message__time text-xs">18:16</span>
      <div class="Message__status">
        <MessageCheck />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../styles/variables";

.Message {
  display: inline-flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 4px 12px;
  gap: 4px;

  &.white {
    background-color: $white;
  }

  &.color {
    background-color: $light-green;

    .Message__info {
      & > span {
        color: $white;
      }
    }
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 4px;
  }

  &__status {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
