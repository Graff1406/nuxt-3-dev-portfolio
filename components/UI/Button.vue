<script setup lang="ts">
interface Props {
  invert?: boolean;
  icon?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <button
    class="flex items-center space-x-2 text-md font-semibold border border-black transition-all duration-300 whitespace-nowrap"
    :class="[
      icon ? 'rounded-full p-3' : ' px-4 py-2 rounded-xl',
      props.invert
        ? 'bg-white text-black hover:bg-gray-100 '
        : 'bg-gradient-to-r from-zinc-950 to-zinc-700 text-white hover:bg-gray-800',
    ]"
    :aria-pressed="props.invert ? 'true' : 'false'"
    :aria-label="
      props.invert ? 'Button in inverted mode' : 'Button in normal mode'
    "
  >
    <slot></slot>
  </button>
</template>
