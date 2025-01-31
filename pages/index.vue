<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center py-4 space-y-4">
    <div class="max-w-[80%] flex-1">
      <!-- Start -->
      <div class="h-[calc(100vh-82px)] flex items-center justify-center">
        <div class="flex flex-col space-y-14 items-center">
          <h1
            class="text-6xl font-bold uppercase leading-tight flex flex-col items-center"
          >
            <span class="text-gradient">Product-Driven</span>
            <span
              class="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent"
              >Web Developer</span
            >
          </h1>
          <p class="text-2xl text-center">
            I’m a full-stack web developer with 5 years of experience,
            specializing in high-performance, secure, and user-focused digital
            products. Skilled in UI/UX, performance optimization, security, SEO,
            and debugging to create scalable and efficient web solutions.
          </p>
          <div class="flex items-center gap-6">
            <UIButton invert aria-label="Download CV">
              <Icon
                name="material-symbols:download"
                size="1.3em"
                aria-hidden="true"
              />
              <span> Download CV </span>
            </UIButton>

            <div>
              <SocialContact />
            </div>
          </div>
        </div>
      </div>

      <UIDivider class="mt-0" />

      <section class="flex flex-col justify-center space-y-8">
        <h2 class="subtitle">Short about self</h2>
        <img
          src="/images/preview.png"
          alt="Description of image"
          class="w-full h-auto"
          loading="lazy"
        />
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
    </div>
    <BlockChatAI />
  </div>
</template>
