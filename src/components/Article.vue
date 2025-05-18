<script setup lang="ts">
import { EyeIcon, ChatBubbleOvalLeftIcon } from '@heroicons/vue/24/outline'
import { ref, type PropType } from 'vue'

defineProps({
  posts: {
    type: Array as PropType<Post[]>,
    default: () => [],
  },
})
</script>
<template>
  <div class="space-y-8">
    <article v-for="post in posts" class="flex flex-col md:flex-row">
      <div class="md:flex-1 pr-0 md:pr-6">
        <div class="flex items-center mb-2">
          <img
            class="h-6 w-6 rounded-full mr-2"
            :src="post.channel?.thumbnail"
            alt="Author"
          />
          <span class="text-sm">
            {{ post.channel?.title }}
          </span>
        </div>
        <h2 class="text-xl font-bold mb-2">
          <a :href="post.link">
            {{ post.title }}
          </a>
        </h2>
        <p class="text-gray-600 mb-2">
          {{ post.summary }}
        </p>
        <div class="flex items-center text-gray-500 text-sm">
          <span>{{ post.published_at }}</span>
          <span class="mx-1">·</span>
          <span class="flex items-center">
            <EyeIcon class="h-4 w-4 mr-1" />
            914
          </span>
          <span class="mx-1">·</span>
          <span class="flex items-center">
            <ChatBubbleOvalLeftIcon class="h-4 w-4 mr-1" />
            25
          </span>
        </div>
      </div>
      <div class="mt-4 md:mt-0 md:flex-shrink-0">
        <img
          class="h-32 w-32 object-cover"
          :src="post.featured_image"
          alt="Article image"
        />
      </div>
    </article>
  </div>
</template>
