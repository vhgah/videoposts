<template>
  <div class="ml-6 hidden md:block">
    <div class="relative" ref="searchRef">
      <!-- Search Input -->
      <div
        class="flex items-center bg-gray-100 rounded-full px-4 py-3 cursor-text"
        @click="showResults = true"
      >
        <search-icon v-if="!isLoading" class="text-gray-500 w-6 h-6" />
        <loader-icon v-else class="text-gray-500 w-6 h-6 animate-spin" />
        <input
          type="text"
          placeholder="Search"
          class="bg-transparent border-none outline-none ml-2 w-full text-gray-700 text-lg placeholder-gray-500"
          v-model="searchQuery"
          @focus="showResults = true"
        />
      </div>

      <!-- Results Dropdown -->
      <div
        v-if="showResults"
        class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10 py-4"
      >
        <div
          class="px-4 py-2 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
        >
          <div class="flex items-center">
            <div
              class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <compass-icon class="text-gray-700 w-5 h-5" />
            </div>
            <span class="ml-4 text-xl text-gray-800">Explore topics</span>
          </div>
          <arrow-up-right-icon class="text-gray-500 w-5 h-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import {
  Search as SearchIcon,
  Compass as CompassIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Loader as LoaderIcon,
} from 'lucide-vue-next'

const searchRef = ref(null)
const searchQuery = ref('')
const showResults = ref(false)
const isLoading = ref(false)
const debounceTimeout = ref(null)

// Handle search with debounce
watch(searchQuery, (newValue) => {
  // Clear any existing timeout
  if (debounceTimeout.value) {
    clearTimeout(debounceTimeout.value)
  }

  // Set loading state
  isLoading.value = true

  // Set a new timeout
  debounceTimeout.value = setTimeout(() => {
    // Perform search operation here
    performSearch(newValue)
  }, 300) // 300ms debounce
})

const performSearch = (query) => {
  // Simulate API call or search operation
  console.log('Searching for:', query)

  // Simulate a delay for the search operation
  setTimeout(() => {
    // Search completed
    isLoading.value = false
  }, 500)
}

// Close results when clicking outside
const handleClickOutside = (event) => {
  if (searchRef.value && !searchRef.value.contains(event.target)) {
    showResults.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Any additional custom styles can go here */
</style>
