<script setup lang="ts">
import { computed, defineComponent } from "vue";
import MessageCheck from "./MessageCheck.vue";

const props = defineProps({
  text: String,
  type: String as () => "white" | "color",
  time: Date,
  status: String,
});

defineComponent({
  components: {
    MessageCheck,
  },
});

const messageTime = computed(() => {
  return `${props.time?.getHours()}:${props.time?.getMinutes()}`;
});
</script>

<template>
  <section class="Message" :class="props.type">
    <div class="Message__text">{{ props.text }}</div>
    <div class="Message__info">
      <span class="Message__time text-xs">{{ messageTime }}</span>
      <div class="Message__status">
        <MessageCheck :status="props.status" :type="props.type" />
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
