<script setup lang="ts">
import { ref, nextTick } from "vue";
import { useId } from "vue";

const userMessage = ref<string>("");
const messages = ref<{ role: "user" | "bot"; content: string; id: string }[]>(
  []
);
const isChatActive = ref(false);
const messageContainer = ref<HTMLDivElement | null>(null);
const microphoneActive = ref(false);
const mediaStream = ref<MediaStream | null>(null);
const messageInput = ref<HTMLInputElement | null>(null);

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

  pushMessage(
    "My name Avtandil. I ready to start to conversation to you.",
    "bot"
  );

  // Wait for the DOM to update and then scroll to the bottom
  nextTick(() => {
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    }
    userMessage.value = "";
  });
};

const toggleMicrophone = async (): Promise<void> => {
  if (microphoneActive.value) {
    // Stop all audio tracks to release the microphone
    mediaStream.value?.getTracks().forEach((track) => track.stop());
    mediaStream.value = null;
    microphoneActive.value = false;
    console.log("🎤 Microphone is deactivated.");
    return;
  }

  try {
    console.log("🔄 Requesting microphone access...");
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    mediaStream.value = stream;
    microphoneActive.value = true;
    console.log("🎤 Microphone is active!", stream);

    // After microphone is activated, focus the input field
    if (messageInput.value) {
      messageInput.value.focus();
    }
  } catch (error: any) {
    console.error("❌ Failed to access the microphone:", error);

    if (error.name === "NotAllowedError") {
      alert(
        "Microphone access was denied. Please enable it in your browser settings."
      );
    } else if (error.name === "NotFoundError") {
      alert("No microphone found. Please connect a microphone.");
    } else {
      alert(
        "Could not access the microphone. Please check your browser settings."
      );
    }

    microphoneActive.value = false;
  }
};
</script>

<template>
  <div class="border border-zinc-800 rounded-xl w-full flex overflow-hidden">
    <!-- Describe -->

    <div
      class="text-center space-y-4 flex-col justify-center text-white rounded-l-xl bg-gradient-to-l lg:bg-gradient-to-b from-zinc-950 to-zinc-700 transition-all duration-300"
      :class="[
        messages.length > 0
          ? 'whitespace-nowrap max-w-0 p-0'
          : 'lg:max-w-80 p-4',
        isChatActive ? 'hidden' : 'flex',
      ]"
    >
      <h3 class="text-3xl lg:text-4xl font-bold">My Alter Ego AI</h3>
      <p class="text-md lg:text-xl">
        Ask me anything about my work as a web developer! I’ll reply with text,
        code snippets, and video links showcasing my projects.
      </p>

      <!-- Contacts -->

      <div class="hidden lg:block items-center">
        <div class="flex items-center mx-2">
          <UIDivider />
          <p class="mx-2 font-bold uppercase text-sm">Contacts</p>
          <UIDivider />
        </div>
        <SocialContact class="justify-evenly" />
      </div>

      <!-- Start Chat Button -->

      <div class="lg:hidden">
        <UIDivider />

        <UIButton
          @click="isChatActive = !isChatActive"
          invert
          class="w-full flex justify-center"
        >
          <Icon name="mdi:chat" size="2em" />
          <span>Start Chat AI</span>
        </UIButton>
      </div>
    </div>

    <!-- Chat -->

    <div
      class="flex-1 space-y-4 rounded-xl p-4"
      :class="[isChatActive ? 'block ' : 'hidden lg:flex lg:flex-col']"
    >
      <div
        ref="messageContainer"
        class="flex flex-col flex-1 custom-scrollbar rounded-xl overflow-y-auto space-y-4"
        :class="{
          'h-[calc(100vh-240px)] lg:h-[calc(100vh-280px)]': isChatActive,
        }"
      >
        <ul v-if="messages.length > 0" class="flex-1 h-full space-y-2">
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
                'px-2 py-1 rounded-xl text-sm lg:text-base',
              ]"
            >
              {{ message.content }}
            </span>
          </li>
        </ul>
        <div
          v-else
          class="flex-none flex items-center justify-center space-x-4 h-full"
        >
          <Icon name="fluent:bot-sparkle-28-regular" size="8em" />
          <div class="flex flex-col space-y-2">
            <p class="text-xl font-bold">Hi, I'm Avtandil Alter Ego AI.</p>
            <p>How can I help you?</p>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <input
          ref="messageInput"
          :placeholder="
            microphoneActive ? 'Listening...' : 'Type your message...'
          "
          type="text"
          class="rounded-xl w-full px-3 py-2 lg:p-4 text-sm lg:text-md border outline-none text-zinc-600"
          v-model="userMessage"
          @keyup.enter="sendMessage"
        />
        <UIButton
          @click="toggleMicrophone"
          class="border-zinc-200"
          :class="{ 'text-red-600': microphoneActive }"
          invert
          icon
        >
          <Icon name="mdi:microphone" class="text-2xl lg:text-4xl m-1 lg:m-2" />
        </UIButton>
      </div>
    </div>
  </div>
</template>
