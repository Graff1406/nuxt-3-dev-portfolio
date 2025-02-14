<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="flex justify-center h-full">
    <div
      class="flex flex-col justify-between w-full lg:w-[70%] min-h-screen h-full"
    >
      <header
        class="sticky top-0 flex justify-between items-center border-b border-zinc-400 bg-white z-10 w-full p-2 lg:py-4"
        role="banner"
      >
        <p class="flex items-center gap-4">
          <Icon
            name="skill-icons:htmx-dark"
            size="3em"
            aria-hidden="true"
            class="hidden lg:block"
          />

          <Icon
            name="skill-icons:htmx-dark"
            size="2.5em"
            aria-hidden="true"
            class="lg:hidden"
          />
          <span class="text-xl lg:text-4xl font-bold uppercase">Avtandil</span>
        </p>
        <div>
          <UIButton class="lg:hidden" aria-label="Download CV">
            <Icon
              name="material-symbols:download"
              aria-hidden="true"
              size="1.5em"
            />
            <span> Download CV </span>
          </UIButton>
          <UIButton class="hidden lg:flex" aria-label="Download CV">
            <Icon
              name="material-symbols:download"
              aria-hidden="true"
              size="2em"
            />
            <span> Download CV </span>
          </UIButton>
        </div>
      </header>
      <main class="flex-1 h-full" role="main">
        <slot></slot>
      </main>
      <footer
        class="flex justify-between items-center bg-gradient-to-l from-zinc-950 to-zinc-700 text-white lg:rounded-t-xl w-full p-2 lg:py-4 lg:px-6"
        role="contentinfo"
      >
        <p class="text-xl flex items-center space-x-4">
          <Icon name="skill-icons:htmx-dark" size="1.5em" aria-hidden="true" />
          <span class="text-sm lg:text-base"
            >© 2018 - {{ currentYear }} | Product & User-Driven Web
            Developer</span
          >
        </p>
        <SocialContact aria-label="Social media links" />
      </footer>
    </div>
  </div>
</template>
