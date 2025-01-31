<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center p-2 lg:px-0 space-y-4">
    <div class="lg:max-w-[80%] flex-1">
      <section
        class="h-[calc(100vh-59px)] lg:h-[calc(100vh-82px)] flex items-center justify-center"
      >
        <div class="flex flex-col space-y-8 lg:space-y-14 items-center">
          <h1
            class="text-[40px] lg:text-6xl font-bold uppercase leading-tight flex flex-col items-center"
          >
            <span class="text-gradient">Product-Driven</span>
            <span
              class="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent"
              >Web Developer</span
            >
          </h1>
          <p class="text-lg lg:text-2xl text-center">
            I’m a full-stack web developer with 5 years of experience,
            specializing in high-performance, secure, and user-focused digital
            products. Skilled in UI/UX, performance optimization, security, SEO,
            and debugging to create scalable and efficient web solutions.
          </p>
          <div class="flex items-center flex-wrap gap-3 lg:gap-6">
            <UIButton invert aria-label="Download CV">
              <Icon
                name="material-symbols:download"
                size="1.3em"
                aria-hidden="true"
              />
              <span> Download CV </span>
            </UIButton>

            <SocialContact />
          </div>
        </div>
      </section>

      <UIDivider class="mt-0" />

      <section class="flex flex-col justify-center space-y-4 lg:space-y-8">
        <h2 class="subtitle">Short video</h2>
        <NuxtImg src="images/preview.webp" />
      </section>

      <UIDivider />

      <ClientOnly>
        <BlockBrandLogs />
      </ClientOnly>

      <UIDivider />

      <section>
        <h2 class="subtitle">Product-Driven</h2>
      </section>

      <UIDivider />

      <BlockFeatureList />

      <UIDivider />

      <section>
        <h2 class="subtitle">Efficient & Productivity</h2>
      </section>

      <UIDivider />
    </div>
    <WidgetChatAI />
  </div>
</template>
