<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center py-4 space-y-4">
    <div class="max-w-[80%] flex-1">
      <!-- Start -->
      <div class="h-[calc(100vh-82px)] flex items-center justify-center">
        <div class="flex flex-col space-y-14 items-center">
          <h1 class="text-6xl font-bold uppercase leading-tight flex flex-col">
            <span class="text-gradient">Product-Driven</span>
            <span
              class="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent"
              >Web Developer</span
            >
          </h1>
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
