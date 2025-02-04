<script setup lang="ts">
const footerIcons: { link: string; name: string; label: string }[] = [
  { link: "https://github.com/Graff1406", name: "mdi:github", label: "GitHub" },
  {
    link: "https://www.linkedin.com/in/avtandil-shainidze-714533196/",
    name: "mdi:linkedin",
    label: "LinkedIn",
  },
  {
    link: "mailto:shainidze@gmail.com",
    name: "basil:gmail-solid",
    label: "Gmail",
  },
  {
    link: "https://t.me/avtan_sh",
    name: "ic:baseline-telegram",
    label: "Telegram",
  },
];
</script>

<template>
  <ul
    aria-label="Social media links"
    class="flex justify-between gap-1.5 lg:gap-3 pt-1.5"
  >
    <li v-for="(icon, index) in footerIcons" :key="index" class="rounded-full">
      <NuxtLink
        :to="icon.link"
        target="_blank"
        rel="noopener noreferrer"
        external
        :aria-label="`Open ${icon.label} in a new tab`"
      >
        <Icon
          :name="icon.name"
          size="2em"
          class="hover:text-blue-800 transition-all duration-300"
          :aria-hidden="true"
          :title="icon.label"
        />
        <span class="sr-only">{{ icon.label }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>
