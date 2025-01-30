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
  <div class="border border-zinc-800 rounded-xl w-full flex">
    <div
      v-if="messages.length === 0"
      class="basis-1/3 text-center space-y-4 flex flex-col justify-center bg-zinc-800 text-white rounded-l-xl p-4"
    >
      <!-- <span>
        <Icon name="fluent:bot-sparkle-28-regular" size="8em" />
      </span> -->

      <h3 class="text-4xl font-bold">My Alter Ego AI</h3>
      <p class="text-xl">
        You can ask me anything about me as web developer and all technologies
        around!
      </p>
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
            <span>
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
