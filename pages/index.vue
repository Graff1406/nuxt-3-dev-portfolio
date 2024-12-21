<script setup lang="ts">
const featureCards: {
  title: string;
  description: string;
  icon: string;
  link: string;
}[] = [
  {
    title: "Components",
    description: "I am a full-stack web developer with 5 years of experience.",
    icon: "tdesign:component-grid-filled",
    link: "/",
  },
  {
    title: "Widgets",
    description: "I am a full-stack web developer with 5 years of experience.",
    icon: "tdesign:component-layout-filled",
    link: "/",
  },
  {
    title: "Clone sites",
    description: "I am a full-stack web developer with 5 years of experience.",
    icon: "material-symbols:content-copy-sharp",
    link: "/",
  },
];
</script>

<template>
  <div class="flex flex-col items-center py-4 space-y-4">
    <div class="max-w-[80%] flex-1">
      <!-- Start -->
      <div class="h-[calc(100vh-82px)] flex items-center justify-center">
        <div class="flex flex-col space-y-14 items-center">
          <p class="text-6xl font-bold uppercase">Full Stack Web Developer</p>
          <p class="text-2xl">
            I am a full-stack web developer with 5 years of experience. I have a
            passion for web development and love to create for web and mobile
            devices. Experienced Web Developer with expertise in advanced web
            development across all stages. Skilled in user interface design,
            testing, and debugging, ensuring high-quality, efficient web
            solutions.
          </p>
          <div class="flex items-center gap-6">
            <TheButton invert>
              <Icon name="material-symbols:download" size="2em" />
              <span> Download CV </span>
            </TheButton>

            <div>
              <SocialContact />
            </div>
          </div>
        </div>
      </div>

      <!-- Tach -->

      <div>
        <ul class="flex items-center text-xl">
          <li>
            <Icon name="vscode-icons:file-type-js-official" size="3em" />
          </li>
          <li>
            <Icon name="logos:html-5" size="3em" />
          </li>
          <li>
            <Icon name="devicon:css3-wordmark" size="3em" />
          </li>
          <li>
            <Icon name="devicon:vuejs" size="3em" />
          </li>
          <li>
            <Icon name="devicon:nuxtjs" size="3em" />
          </li>
          <li class="text-green-500">
            <Icon name="logos:vuetifyjs" size="3em" />
          </li>
          <li>
            <Icon name="vscode-icons:file-type-reactjs" size="3em" />
          </li>
          <li>
            <Icon name="catppuccin:package-json" size="3em" />
          </li>
          <li>
            <Icon name="skill-icons:expressjs-light" size="3em" />
          </li>
          <li>
            <Icon name="devicon:angularjs" size="3em" />
          </li>
          <li>
            <Icon name="skill-icons:tailwindcss-light" size="3em" />
          </li>
          <li>
            <Icon name="vscode-icons:file-type-firestore" size="3em" />
          </li>
          <li>
            <Icon name="devicon-plain:mongodb-wordmark" size="3em" />
          </li>
          <li>
            <Icon name="logos:graphql" size="3em" />
          </li>
          <li>
            <Icon name="skill-icons:materialui-light" size="3em" />
          </li>
          <li>
            <Icon name="devicon:jiraalign" size="3em" />
          </li>
          <li>
            <Icon name="skill-icons:netlify-light" size="3em" />
          </li>
          <li>
            <Icon name="skill-icons:figma-light" size="3em" />
          </li>
          <li>
            <Icon name="skill-icons:git" size="3em" />
          </li>
          <li>
            <Icon name="skill-icons:jest" size="3em" />
          </li>
          <li>
            <Icon name="skill-icons:linux-light" size="3em" />
          </li>
        </ul>
      </div>

      <!-- Features -->

      <div class="space-y-12">
        <div
          v-for="card in featureCards"
          :key="card.title"
          class="flex-1 flex justify-between border-t border-black pt-14"
        >
          <div class="flex-1 py-4 px-6 flex flex-col justify-center space-y-6">
            <h3 class="text-4xl font-bold text-center">{{ card.title }}</h3>
            <p class="text-xl">
              {{ card.description }}
            </p>
            <div class="flex justify-center">
              <NuxtLink :to="card.link">
                <TheButton invert>
                  <Icon name="material-symbols:arrow-forward-ios" />
                  <span> See More </span>
                </TheButton>
              </NuxtLink>
            </div>
          </div>
          <div>
            <Icon :name="card.icon" size="23em" style="color: #27272a" />
          </div>
        </div>
      </div>
    </div>

    <!-- Chat AI -->

    <div class="border border-black rounded-xl w-full flex">
      <div
        class="basis-1/3 text-center space-y-4 flex flex-col justify-center bg-black text-white rounded-l-xl p-4"
      >
        <h3 class="text-4xl font-bold">My Alter Ego AI</h3>
        <p class="text-xl">
          You can ask me anything about me as web developer and all technologies
          around!
        </p>
      </div>
      <div class="flex-1 space-y-4 rounded-xl p-4">
        <div class="h-80 custom-scrollbar rounded-xl overflow-y-auto space-y-4">
          <p>
            teYou can ask me anything about me as web developer and all
            technologies around!st
          </p>
          <p>
            You can ask me anything about me as web developer and all
            technologies around!
          </p>
          <p>
            teYou can ask me anything about me as web developer and all
            technologies around!st
          </p>
          <p>
            You can ask me anything about me as web developer and all
            technologies around!
          </p>
          <p>
            teYou can ask me anything about me as web developer and all
            technologies around!st
          </p>
          <p>
            You can ask me anything about me as web developer and all
            technologies around!
          </p>
          <p>
            teYou can ask me anything about me as web developer and all
            technologies around!st
          </p>
          <p>
            You can ask me anything about me as web developer and all
            technologies around!
          </p>
        </div>
        <div>
          <input
            placeholder="Ask me anything..."
            type="text"
            class="rounded-xl w-full p-4 text-xl border"
          />
        </div>
      </div>
    </div>
  </div>
</template>
