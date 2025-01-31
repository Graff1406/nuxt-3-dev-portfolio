<script setup lang="ts">
const brandLogos: string[] = [
  "skill-icons:javascript",
  "skill-icons:html",
  "skill-icons:css",
  "skill-icons:vuejs-light",
  "skill-icons:nuxtjs-light",
  "skill-icons:pinia-light",
  "skill-icons:vuetify-light",
  "skill-icons:react-light",
  "skill-icons:redux",
  "logos:jira",
  "skill-icons:nodejs-light",
  "vscode-icons:file-type-firestore",
  "skill-icons:graphql-light",
  "vscode-icons:file-type-angular",
  "skill-icons:tailwindcss-light",
  "skill-icons:materialui-light",
  "skill-icons:expressjs-light",
  "skill-icons:netlify-light",
  "skill-icons:figma-light",
  "skill-icons:jest",
  "skill-icons:linux-light",
  "skill-icons:windows-light",
  "skill-icons:git",
  "skill-icons:notion-light",
  "skill-icons:typescript",
  "skill-icons:vscode-light",
  "skill-icons:vite-light",
  "skill-icons:webpack-light",
];
</script>

<template>
  <div class="flex flex-col items-center py-4 space-y-4">
    <div class="max-w-[80%] flex-1">
      <!-- Start -->
      <div class="h-[calc(100vh-82px)] flex items-center justify-center">
        <div class="flex flex-col space-y-14 items-center">
          <p class="text-6xl font-bold uppercase leading-tight flex flex-col">
            <span class="text-gradient">Product-Driven</span>
            <span
              class="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent"
              >Web Developer</span
            >
          </p>
          <p class="text-2xl">
            I am a full-stack web developer with 5 years of experience, focused
            on building high-performance, secure, and user-centric digital
            products. Passionate about creating seamless web and mobile
            experiences that drive engagement and business growth. Skilled in
            UI/UX design, performance optimization, security best practices,
            SEO, and debugging to deliver scalable, efficient, and resilient web
            solutions.
          </p>
          <div class="flex items-center gap-6">
            <UIButton invert>
              <Icon name="material-symbols:download" size="1.3em" />
              <span> Download CV </span>
            </UIButton>

            <div>
              <SocialContact />
            </div>
          </div>
        </div>
      </div>

      <UIDivider />

      <ClientOnly>
        <BlockBrandLogs />
      </ClientOnly>

      <UIDivider />

      <BlockFeatureList />
    </div>
    <BlockChatAI />
  </div>
</template>
