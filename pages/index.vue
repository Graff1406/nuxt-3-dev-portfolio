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
          <p class="text-6xl font-bold uppercase">Full Stack Web Developer</p>
          <p class="text-2xl">
            I am a full-stack web developer with 5 years of experience. I have a
            passion for web development and love to create for web and mobile
            devices. Experienced Web Developer with expertise in advanced web
            development across all stages. Skilled in user interface design,
            testing, and debugging, ensuring high-quality, efficient web
            solutions.
          </p>
          <div class="flex items-center gap-6">
            <TheButton invert>
              <Icon name="material-symbols:download" size="2em" />
              <span> Download CV </span>
            </TheButton>

            <div>
              <SocialContact />
            </div>
          </div>
        </div>
      </div>

      <!-- Brand logos -->

      <div>
        <BrandLogs />
      </div>

      <!-- Features -->

      <div class="space-y-12">
        <FeatureList />
      </div>

      <!-- Chat AI -->

      <div class="border-t border-black py-16 space-y-12 w-full flex">
        <ChatAIOld />
      </div>
    </div>
  </div>
</template>
