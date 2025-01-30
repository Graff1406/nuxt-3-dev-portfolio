<script setup lang="ts">
const featureCards: {
  title: string;
  description: string;
  icon: string;
  link: string;
}[] = [
  {
    title: "Components",
    description:
      "Explore a collection of reusable UI components crafted for versatility and seamless integration into your projects. These components offer a solid foundation for building consistent and user-friendly interfaces.",
    icon: "proicons:component",
    link: "/",
  },
  {
    title: "Widgets",
    description:
      "Discover a range of pre-built widgets designed to enhance functionality and interactivity. From dynamic data displays to user input tools, these widgets streamline development and empower your applications.",
    icon: "solar:widget-5-linear",
    link: "/",
  },
  {
    title: "Clone sites",
    description:
      "See examples of meticulously recreated websites, demonstrating expertise in replicating complex designs and functionalities. These clones showcase proficiency in various technologies and attention to detail.",
    icon: "prime:clone",
    link: "/",
  },
  {
    title: "Back-end & Bots",
    description:
      "Delve into the world of server-side logic and automation. Explore projects involving back-end development, API integrations, and the creation of intelligent bots to enhance efficiency and user experience.",
    icon: "solar:server-path-broken",
    link: "/",
  },
  {
    title: "Add-ons & Extensions",
    description:
      "Discover a selection of add-ons and extensions designed to extend the functionality of popular tools and platforms. These custom solutions enhance productivity and offer tailored features for specific needs.",
    icon: "gg:toolbar-top",
    link: "/",
  },
];
</script>

<template>
  <div v-for="card in featureCards" :key="card.title">
    <UIDivider />

    <div class="flex-1 flex justify-between">
      <div class="flex-1 py-4 px-6 flex flex-col justify-center space-y-7">
        <h3 class="text-4xl font-bold text-center">{{ card.title }}</h3>
        <p class="text-xl">
          {{ card.description }}
        </p>
        <div class="flex justify-center">
          <NuxtLink :to="card.link">
            <UIButton invert>
              <Icon name="material-symbols:arrow-forward-ios" />
              <span> See More </span>
            </UIButton>
          </NuxtLink>
        </div>
      </div>
      <div>
        <Icon :name="card.icon" size="23em" style="color: #3f3f46" />
      </div>
    </div>
  </div>
</template>
