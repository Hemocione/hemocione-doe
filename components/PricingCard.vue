<template>
  <div
    class="relative w-full mx-auto overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 border"
    :class="
      recommended
        ? 'border-[#bb0a08] border-2 shadow-[0_10px_30px_rgba(187,10,8,0.35)]'
        : 'border-gray-200'
    "
  >
    <span
      v-if="recommended"
      class="absolute top-0 right-0 bg-[#bb0a08] text-white text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wide px-2 py-1 rounded-bl-lg"
    >
      Recomendado
    </span>
    <div class="p-2 sm:p-4 h-full flex flex-col items-center justify-between">
      <div
        class="w-12 h-12 sm:w-20 sm:h-20 mb-2 sm:mb-4 flex items-center justify-center bg-[#bb0a08] rounded-full shadow-inner"
      >
        <NuxtImg
          :src="logo"
          :alt="name"
          class="w-8 h-8 sm:w-12 sm:h-12 object-contain"
        />
      </div>
      <h2
        class="mb-1 text-base sm:text-2xl md:text-3xl font-bold text-gray-800 text-center"
      >
        {{ name }}
      </h2>
      <div class="mb-1 text-center">
        <span class="text-base sm:text-xl md:text-2xl font-extrabold text-[#bb0a08]">{{
          cost
        }}</span>
        <span class="text-xs sm:text-sm text-gray-500">/mês</span>
      </div>
      <div class="mb-3 sm:mb-6 text-[0.65rem] sm:text-xs text-gray-500 text-center">
        {{ perDay }}
      </div>
      <button
        class="w-full flex items-center justify-center gap-1.5 px-3 py-2 sm:px-4 sm:py-3 font-bold text-white transition-colors duration-300 ease-in-out bg-[#bb0a08] rounded-xl text-xs sm:text-sm hover:bg-[#8a0000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a6eed]"
      >
        <span aria-hidden="true">💧</span> Ajudar
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
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
  perDay: {
    type: String,
    default: "",
  },
  recommended: {
    type: Boolean,
    default: false,
  },
});
</script>
