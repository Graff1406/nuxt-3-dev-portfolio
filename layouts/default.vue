<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="flex justify-center h-full">
    <div class="flex flex-col justify-between w-[70%] min-h-screen h-full">
      <header class="flex justify-between items-center border-b w-full py-4">
        <div class="flex space-x-4">
          <Icon name="skill-icons:htmx-dark" size="3em" />

          <span class="text-4xl font-bold uppercase">Avtandil</span>
        </div>
        <div>
          <TheButton>
            <Icon name="material-symbols:download" size="2em" />
            <span> Download CV </span>
          </TheButton>
        </div>
      </header>
      <main class="flex-1 h-full">
        <slot></slot>
      </main>
      <footer
        class="flex justify-between items-center bg-black text-white rounded-t-xl w-full py-4 px-6"
      >
        <p class="text-xl">© 2018 - {{ currentYear }} Web Developer</p>
        <SocialContact />
      </footer>
    </div>
  </div>
</template>
