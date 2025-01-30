<script setup lang="ts">
const brands: string[] = [
  "skill-icons:javascript",
  "skill-icons:typescript",
  "skill-icons:html",
  "skill-icons:css",
  "skill-icons:sass",
  "skill-icons:aiscript-dark",
  "skill-icons:angular-dark",
  "skill-icons:apollo",
  "skill-icons:aws-dark",
  "skill-icons:bootstrap",
  "skill-icons:docker",
  "skill-icons:expressjs-dark",
  "skill-icons:figma-dark",
  "skill-icons:git",
  "skill-icons:github-dark",
  "skill-icons:gitlab-dark",
  "skill-icons:graphql-dark",
  "skill-icons:jest",
  "skill-icons:jquery",
  "skill-icons:mongodb",
  "skill-icons:nodejs-dark",
  "skill-icons:notion-dark",
  "skill-icons:pinia-dark",
  "skill-icons:ubuntu-dark",
  "skill-icons:windows-dark",
  "skill-icons:materialui-dark",
  "skill-icons:netlify-dark",
  "skill-icons:nuxtjs-dark",
  "skill-icons:vite-dark",
  "skill-icons:vuetify-dark",
  "skill-icons:react-dark",
  "skill-icons:redux",
  "skill-icons:tailwindcss-dark",
  "skill-icons:typescript-dark",
  "skill-icons:vuejs-dark",
  "skill-icons:webpack-dark",
  "skill-icons:vercel-dark",
  "skill-icons:vscode-dark",
];
</script>

<template>
  <ul class="flex flex-wrap items-center text-xl gap-4">
    <li v-for="brand in brands" :key="brand">
      <Icon :name="brand" size="3em" />
    </li>
  </ul>
</template>
