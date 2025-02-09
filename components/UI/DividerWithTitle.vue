<script setup lang="ts"></script>

<template>
  <div
    class="flex items-center space-x-4 whitespace-nowrap mt-8 mb-2 lg:mt-12 lg:m4-6 bg-zinc-50 px-1"
  >
    <div
      class="divider bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    ></div>
    <div class="text-3xl lg:text-5xl font-bold text-gradient">
      <slot></slot>
    </div>
    <div
      class="divider bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    ></div>
  </div>
</template>
