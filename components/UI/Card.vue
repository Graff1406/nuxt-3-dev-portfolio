<script setup lang="ts"></script>

<template>
  <article class="flex gap-3 lg:gap-6">
    <slot name="lest-aside"> </slot>
    <div class="flex flex-col space-y-4 lg:space-y-6">
      <header>
        <slot name="header"> </slot>
      </header>
      <section class="flex-1">
        <slot></slot>
      </section>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
    <slot name="right-aside"> </slot>
  </article>
</template>
