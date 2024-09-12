<template>
  <div
    class="w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl border border-gray-200"
  >
    <div class="p-4 flex flex-col items-center">
      <div
        class="w-20 h-20 mb-4 flex items-center justify-center bg-[#bb0a08] rounded-full"
      >
        <NuxtImg :src="logo" :alt="name" class="w-12 h-12 object-contain" />
      </div>
      <h2 class="mb-4 text-3xl font-bold text-gray-800 text-center">
        {{ name }}
      </h2>
      <div class="mb-6 text-center">
        <span class="text-2xl font-extrabold text-[#bb0a08]">{{ cost }}</span>
      </div>
      <button
        class="w-full px-4 py-2 font-bold text-white transition-colors duration-300 ease-in-out bg-[#bb0a08] rounded-xl text-sm hover:bg-[#9c0907] focus:outline-none focus:ring-2 focus:ring-[#bb0a08] focus:ring-opacity-50"
      >
        Ajudar
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  logo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  isMonthly: {
    type: Boolean,
    default: true,
  },
});
</script>
