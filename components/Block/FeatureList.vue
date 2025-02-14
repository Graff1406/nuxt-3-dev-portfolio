<script setup lang="ts">
interface FeatureCard {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
}

const features: FeatureCard[] = [
  {
    id: 1,
    title: "Components",
    description:
      "Explore a collection of reusable UI components crafted for versatility and seamless integration into your projects. These components offer a solid foundation for building consistent and user-friendly interfaces.",
    img: "images/block/feature/component_640.webp",
    link: "/",
  },
  {
    id: 2,
    title: "Widgets",
    description:
      "Discover a range of pre-built widgets designed to enhance functionality and interactivity. From dynamic data displays to user input tools, these widgets streamline development and empower your applications.",
    img: "images/block/feature/widget_640.webp",
    link: "/",
  },
  {
    id: 3,
    title: "Clone sites",
    description:
      "See examples of meticulously recreated websites, demonstrating expertise in replicating complex designs and functionalities. These clones showcase proficiency in various technologies and attention to detail.",
    img: "images/block/feature/site_clone_640.webp",
    link: "/",
  },
  {
    id: 4,
    title: "Back-end & Bots",
    description:
      "Delve into the world of server-side logic and automation. Explore projects involving back-end development, API integrations, and the creation of intelligent bots to enhance efficiency and user experience.",
    img: "images/block/feature/bot_server_640.webp",
    link: "/",
  },
  {
    id: 5,
    title: "Add-ons & Extensions",
    description:
      "Discover a selection of add-ons and extensions designed to extend the functionality of popular tools and platforms. These custom solutions enhance productivity and offer tailored features for specific needs.",
    img: "images/block/feature/add_ons_640.webp",
    link: "/",
  },
];
</script>

<template>
  <section aria-labelledby="product-driven-heading">
    <UIDividerWithTitle>
      <h2 class="">Dev Solutions & Tools</h2>
    </UIDividerWithTitle>
    <p class="text-center mt-6 lg:mb-10 lg:text-lg">
      Explore a variety of development solutions, from reusable UI components
      and interactive widgets to full-site clones and back-end automation.
      Enhance your projects with add-ons, extensions, and intelligent bots
      designed for seamless integration and improved efficiency.
    </p>
    <div
      v-for="({ title, id, description, img, link }, index) in features"
      :key="id"
    >
      <div v-if="index > 0" class="divider"></div>

      <UICard aria-label="View Projects" class="flex-col-reverse lg:flex-row">
        <template #header>
          <h3 class="subtitle text-center text-xl lg:text-2xl">
            {{ title }}
          </h3>
        </template>

        <p class="lg:text-md text-center">{{ description }}</p>

        <template #right-aside>
          <div
            class="rounded-lg w-full h-[180px] lg:min-w-[320px] lg:max-w-[320px] lg:h-[240px] overflow-hidden mb-6 lg:mb-0 border"
          >
            <NuxtImg
              :src="img"
              alt="security"
              loading="lazy"
              format="webp"
              class="w-full h-full object-cover"
            />
          </div>
        </template>

        <template #footer>
          <div class="flex justify-center">
            <NuxtLink :to="link">
              <UIButton invert>
                <Icon
                  name="material-symbols:arrow-forward-ios"
                  aria-hidden="true"
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
