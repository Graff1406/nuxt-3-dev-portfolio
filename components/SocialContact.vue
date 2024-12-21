<script setup lang="ts">
const footerIcons: { link: string; name: string }[] = [
  { link: "https://github.com/Graff1406", name: "mdi:github" },
  {
    link: "https://www.linkedin.com/in/avtandil-shainidze-714533196/",
    name: "mdi:linkedin",
  },
  { link: "https://t.me/avtan_sh", name: "ic:baseline-telegram" },
];
</script>

<template>
  <ul class="flex justify-between gap-3 pt-1.5">
    <li v-for="(icon, index) in footerIcons" :key="index" class="rounded-full">
      <NuxtLink :to="icon.link" target="_blank" external>
        <Icon
          :name="icon.name"
          size="2em"
          class="hover:text-blue-800 transition-all duration-300"
        />
      </NuxtLink>
    </li>
  </ul>
</template>
