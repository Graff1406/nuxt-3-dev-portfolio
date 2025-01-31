<script setup lang="ts">
interface Props {
  invert?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <button
    :class="[
      'flex items-center space-x-2 text-md font-semibold px-4 py-2 rounded-xl border border-black transition-all duration-300 whitespace-nowrap',
      props.invert
        ? 'bg-white text-black hover:bg-gray-100 '
        : 'bg-gradient-to-r from-zinc-950 to-zinc-700 text-white hover:bg-gray-800',
    ]"
  >
    <slot></slot>
  </button>
</template>
