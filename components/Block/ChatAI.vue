<script setup lang="ts">
import { useId } from "vue";

const userMessage = ref<string>("");
const messages = ref<{ role: "user" | "bot"; content: string; id: string }[]>(
  []
);
const messageContainer = ref<HTMLDivElement | null>(null);

const pushMessage = (message: string, role: "user" | "bot") => {
  messages.value.push({
    role: role,
    content: message,
    id: useId(),
  });
};

const sendMessage = () => {
  if (userMessage.value === "") return;
  pushMessage(userMessage.value, "user");

  // Wait for the DOM to update and then scroll to the bottom
  nextTick(() => {
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    }
    userMessage.value = "";

    pushMessage(
      "My name Avtandil. I ready to start to conversation to you.",
      "bot"
    );
  });
};
</script>

<template>
  <div class="border border-zinc-800 rounded-xl w-full flex overflow-hidden">
    <div
      class="text-center space-y-4 flex flex-col justify-center text-white rounded-l-xl bg-gradient-to-b from-zinc-950 to-zinc-700 transition-all duration-300"
      :class="
        messages.length > 0 ? 'whitespace-nowrap max-w-0 p-0' : 'max-w-80 p-4'
      "
    >
      <h3 class="text-4xl font-bold">My Alter Ego AI</h3>
      <p class="text-xl">
        You can ask me anything in the chat about me as web developer and all
        technologies around!
      </p>
      <div class="flex items-center">
        <UIDivider />
        <p class="mx-2 font-bold uppercase text-sm">Contacts</p>
        <UIDivider />
      </div>
      <SocialContact class="justify-evenly" />
    </div>
    <div class="flex-1 space-y-4 rounded-xl p-4">
      <div
        ref="messageContainer"
        class="h-80 custom-scrollbar rounded-xl overflow-y-auto space-y-4"
      >
        <ul v-if="messages.length > 0" class="space-y-2">
          <li
            v-for="message in messages"
            :key="message.id"
            class="flex space-x-4 items-center"
          >
            <Icon
              :name="
                message.role === 'user'
                  ? 'material-symbols:face'
                  : 'fluent:bot-sparkle-28-regular'
              "
              size="1.5em"
            />
            <span
              :class="[
                message.role === 'user' ? 'bg-blue-100' : 'bg-green-100',
                'px-2 py-1 rounded-xl',
              ]"
            >
              {{ message.content }}
            </span>
          </li>
        </ul>
        <div v-else class="flex items-center justify-center space-x-4 h-full">
          <Icon name="fluent:bot-sparkle-28-regular" size="8em" />
          <div class="flex flex-col space-y-2">
            <p class="text-xl font-bold">Hi, I'm Avtandil Alter Ego AI.</p>
            <p>How can I help you?</p>
          </div>
        </div>
      </div>
      <div>
        <input
          placeholder="Ask me anything..."
          type="text"
          class="rounded-xl w-full p-4 text-md border outline-none text-zinc-600"
          v-model="userMessage"
          @keyup.enter="sendMessage"
        />
      </div>
    </div>
  </div>
</template>
