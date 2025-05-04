<template>
    <div class="relative" ref="authDropdown">
      <button @click="toggleUserMenu" class="flex items-center">
        <img
          class="h-8 w-8 rounded-full border border-gray-300"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-30%20at%2014.36.55-iYPmFRmkSj6ydTdy0ztmFaN4c488rt.png"
          alt="User profile"
        />
      </button>
  
      <!-- User Menu Dropdown -->
      <div
        v-show="showUserMenu"
        class="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 border border-gray-200"
      >
        <!-- User options -->
        <div class="py-2 px-4">
          <a href="#" class="flex items-center py-3 hover:text-gray-900">
            <UserIcon class="h-5 w-5 text-gray-500 mr-3" />
            <span class="text-gray-600 text-base">Profile</span>
          </a>
          <a href="#" class="flex items-center py-3 hover:text-gray-900">
            <BookmarkIcon class="h-5 w-5 text-gray-500 mr-3" />
            <span class="text-gray-600 text-base">Library</span>
          </a>
          <a href="#" class="flex items-center py-3 hover:text-gray-900">
            <DocumentTextIcon class="h-5 w-5 text-gray-500 mr-3" />
            <span class="text-gray-600 text-base">Stories</span>
          </a>
          <a href="#" class="flex items-center py-3 hover:text-gray-900">
            <ChartBarIcon class="h-5 w-5 text-gray-500 mr-3" />
            <span class="text-gray-600 text-base">Stats</span>
          </a>
        </div>
  
        <!-- Membership section -->
        <div class="border-t border-gray-100 py-2 px-4">
          <a
            href="#"
            class="flex items-center justify-between py-3 text-gray-600 hover:text-gray-900 text-base"
          >
            <span>Become a Medium member</span>
            <StarIcon class="h-5 w-5 text-yellow-400" />
          </a>
          <a
            href="#"
            class="block py-3 text-gray-600 hover:text-gray-900 text-base"
            >Create a Mastodon account</a
          >
        </div>
  
        <!-- Sign out section -->
        <div class="border-t border-gray-100 py-2 px-4">
          <a
            href="#"
            class="block py-3 text-gray-600 hover:text-gray-900 text-base"
            >Sign out</a
          >
          <p class="py-2 text-gray-500 text-sm">v•••••@gmail.com</p>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import {
    UserIcon,
    BookmarkIcon,
    DocumentTextIcon,
    ChartBarIcon,
    StarIcon,
  } from '@heroicons/vue/24/outline'
  
  const authDropdown = ref(null)
  const showUserMenu = ref(false)
  
  const toggleUserMenu = () => {
    showUserMenu.value = !showUserMenu.value
  }
  
  const handleClickOutside = (event) => {
    if (authDropdown.value && !authDropdown.value.contains(event.target)) {
      showUserMenu.value = false
    }
  }
  
  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
  </script>

