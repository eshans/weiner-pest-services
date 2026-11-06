<script setup>
defineProps({ light: Boolean })
</script>

<template>
  <RouterLink to="/" class="group flex flex-col leading-none no-underline" aria-label="Weiner Pest Services home">
    <span
      class="font-display text-2xl font-bold tracking-[0.14em] uppercase sm:text-3xl"
      :class="light ? 'text-white' : 'text-brand-400 group-hover:text-brand-600'"
    >
      Weiner
    </span>
    <span
      class="mt-1 font-display text-[0.7rem] font-semibold tracking-[0.2em] uppercase"
      :class="light ? 'text-brand-100' : 'text-brand-600'"
    >
      Pest Services Inc
    </span>
  </RouterLink>
</template>
