<script setup lang="ts">
const brandIcons: string[] = [
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
  "skill-icons:vuejs-dark",
  "skill-icons:webpack-dark",
  "skill-icons:vercel-dark",
  "skill-icons:vscode-dark",
];
</script>

<template>
  <section class="space-y-12">
    <h2 class="subtitle">Tach Stack</h2>
    <ul
      class="flex flex-wrap items-center justify-center text-xl gap-2 lg:gap-4"
      role="list"
    >
      <li v-for="icon in brandIcons" :key="icon">
        <Icon
          :name="icon"
          size="3em"
          :aria-label="icon"
          role="img"
          class="hidden lg:block"
        />
        <Icon
          :name="icon"
          size="2em"
          :aria-label="icon"
          role="img"
          class="block lg:hidden"
        />
      </li>
    </ul>

    <div class="flex justify-center">
      <NuxtLink to="/">
        <UIButton invert>
          <Icon name="material-symbols:arrow-forward-ios" aria-hidden="true" />
          <span> See More </span>
        </UIButton>
      </NuxtLink>
    </div>
  </section>
</template>
