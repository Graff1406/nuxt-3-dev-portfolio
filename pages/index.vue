<template>
  <main class="flex flex-col items-center p-2 lg:px-0 space-y-4">
    <div class="lg:max-w-[80%] flex-1">
      <section
        class="h-[calc(100vh-59px)] lg:h-[calc(100vh-82px)] flex items-center justify-center"
        aria-labelledby="main-heading"
      >
        <div class="flex flex-col space-y-8 lg:space-y-14 items-center">
          <h1
            class="text-[40px] lg:text-6xl font-bold uppercase leading-tight flex flex-col items-center"
          >
            <span class="text-gradient">Product & User-Driven</span>
            <span
              class="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent"
              >Web Developer</span
            >
          </h1>
          <p class="text-lg lg:text-2xl text-center">
            I'm a full-stack web developer with 5+ years of experience,
            specializing in creating high-performance, secure, and user-friendly
            digital products. My priorities are: security, performance,
            reliability, scalability, and accessibility. My key skills include
            UI/UX design, performance optimization, SEO, debugging, and building
            scalable web solutions. I aim to create simple, intuitive, and
            beneficial products for both businesses and users.
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

      <section
        class="flex flex-col justify-center space-y-4 lg:space-y-8"
        aria-labelledby="video-heading"
      >
        <UIDividerWithTitle>
          <h2>Short video</h2>
        </UIDividerWithTitle>

        <div class="rounded-lg overflow-hidden border">
          <NuxtImg
            src="images/preview.webp"
            width="1280"
            height="800"
            alt="Preview of a short video"
            loading="lazy"
            format="webp"
            class="w-full h-full object-cover"
          />
        </div>
      </section>

      <BlockBrandLogs />

      <BlockProductDriven />

      <section aria-labelledby="efficient-heading">
        <UIDividerWithTitle>
          <h2>Efficient & Productivity</h2>
        </UIDividerWithTitle>
      </section>

      <BlockFeatureList />
    </div>
    <WidgetChatAI />
  </main>
</template>
