<script setup lang="ts">
const products = [
  {
    id: 1,
    title: "Security",
    description:
      "Build a modular, flexible UI that grows effortlessly. Use reusable components, responsive design, lazy loading, and efficient API handling. Integrate automated testing and CI/CD to catch issues early, ensuring that adding new features or handling increased load doesn’t compromise performance.",
    img: "images/block/prod-driven/security_320.webp",
    link: "/",
  },
  {
    id: 2,
    title: "Performance",
    description:
      "ЕBuild a modular, flexible UI that grows effortlessly. Use reusable components, responsive design, lazy loading, and efficient API handling. Integrate automated testing and CI/CD to catch issues early, ensuring that adding new features or handling increased load doesn’t compromise performance.",
    img: "images/block/prod-driven/Performance_320.webp",
    link: "/",
  },
  {
    id: 3,
    title: "Reliability",
    description:
      "The frontend may look beautiful, but if it crashes, freezes, or is unstable, the user will simply leave. Reliability means that the product always works, predictably, and without failures.",
    img: "images/block/prod-driven/reliability_320.webp",
    link: "/",
  },
  {
    id: 4,
    title: "Predictability",
    description:
      "Predictability is about the behavior of the system (how it reacts to user actions). Predictability is important for user convenience and interface predictability, as well as stable and expected system behavior, interface uniformity and error handling.",
    img: "images/block/prod-driven/predictability_320.webp",
    link: "/",
  },
  {
    id: 5,
    title: "Compatibility",
    description:
      "If a user cannot comfortably work with an application due to incompatibility with its environment, he will simply leave. Compatibility is not only cross-browser compatibility, but also adaptation to different operating systems, devices and screen resolutions.",
    img: "images/block/prod-driven/compatibility_320.webp",
    link: "/",
  },
  {
    id: 6,
    title: "Accessibility",
    description:
      "Accessibility (A11Y) - the product must be convenient and functional for all users, including people with disabilities, providing equal access to content and functions.",
    img: "images/block/prod-driven/accessibility_320.webp",
    link: "/",
  },
];
</script>

<template>
  <section aria-labelledby="product-driven-heading">
    <UIDividerWithTitle>
      <h2 class="">Product & User-Driven</h2>
    </UIDividerWithTitle>
    <p class="text-center mt-6 lg:mb-10 lg:text-lg">
      Build a modular, flexible UI that grows effortlessly. Use reusable
      components, responsive design, lazy loading, and efficient API handling.
      Integrate automated testing and CI/CD to catch issues early, ensuring that
      adding new features or handling increased load doesn’t compromise
      performance.
    </p>
    <div
      v-for="({ title, id, description, img, link }, index) in products"
      :key="id"
    >
      <div v-if="index > 0" class="divider"></div>

      <UICard aria-label="View Projects">
        <template #header>
          <h3 class="subtitle text-center text-xl lg:text-2xl">
            {{ title }}
          </h3>
        </template>

        <p class="lg:text-md text-center">{{ description }}</p>

        <template #right-aside>
          <div
            class="overflow-hidden rounded-lg min-w-[320px] max-w-[320px]"
            loading="lazy"
          >
            <NuxtImg :src="img" alt="security" loading="lazy" format="webp" />
          </div>
        </template>

        <template #footer>
          <div class="flex justify-center">
            <NuxtLink :to="link">
              <UIButton invert>
                <Icon
                  name="material-symbols:arrow-forward-ios"
                  aria-hidden="true"
                  class=""
                />
                <span> See More </span>
              </UIButton>
            </NuxtLink>
          </div>
        </template>
      </UICard>
    </div>
  </section>
</template>
