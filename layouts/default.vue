<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="flex justify-center h-full">
    <div class="flex flex-col justify-between w-[70%] min-h-screen h-full">
      <header
        class="flex justify-between items-center border-b border-zinc-400 w-full py-4"
        role="banner"
      >
        <div class="flex space-x-4">
          <Icon name="skill-icons:htmx-dark" size="3em" aria-hidden="true" />
          <span class="text-4xl font-bold uppercase">Avtandil</span>
        </div>
        <div>
          <UIButton>
            <Icon
              name="material-symbols:download"
              size="2em"
              aria-hidden="true"
            />
            <span> Download CV </span>
          </UIButton>
        </div>
      </header>
      <main class="flex-1 h-full" role="main">
        <slot></slot>
      </main>
      <footer
        class="flex justify-between items-center bg-gradient-to-l from-zinc-950 to-zinc-700 text-white rounded-t-xl w-full py-4 px-6"
        role="contentinfo"
      >
        <p class="text-xl flex items-center space-x-4">
          <Icon name="skill-icons:htmx-dark" size="1.5em" aria-hidden="true" />
          <span>© 2018 - {{ currentYear }} Web Developer</span>
        </p>
        <SocialContact />
      </footer>
    </div>
  </div>
</template>
