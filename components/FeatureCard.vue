<script setup lang="ts"></script>

<template>
  <div class="border border-black rounded-xl flex-1 flex justify-between">
    <div class="flex-1 py-4 px-6 flex flex-col justify-center space-y-6">
      <h3 class="text-4xl font-bold text-center">Components</h3>
      <p class="text-xl">
        I am a full-stack web developer with 5 years of experience. I have a
        passion for web development and love to create for web and mobile
        devices. Experienced Web Developer with expertise in advanced web
        development across all stages. Skilled in user interface design,
        testing, and debugging, ensuring high-quality, efficient web solutions.
      </p>
      <div class="flex justify-center">
        <TheButton>
          <Icon name="material-symbols:arrow-forward-ios" size="2em" />
          <span> See More </span>
        </TheButton>
      </div>
    </div>
    <div>
      <Icon name="tdesign:component-grid-filled" size="23em" />
    </div>
  </div>
</template>
