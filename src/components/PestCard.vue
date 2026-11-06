<script setup>
import Icon from './Icon.vue'

defineProps({ pest: { type: Object, required: true } })
</script>

<template>
  <RouterLink :to="`/${pest.slug}`" class="card group">
    <div class="grid aspect-16/10 place-items-center overflow-hidden bg-brand-50">
      <img
        v-if="pest.image"
        :src="pest.image"
        :alt="pest.name"
        loading="lazy"
        class="size-full object-cover transition duration-500 group-hover:scale-105"
      />
      <Icon v-else name="bug" size="56" class="text-brand-400" />
    </div>
    <div class="flex flex-1 flex-col px-5 pt-5 pb-6">
      <h3 class="mb-1">{{ pest.name }}</h3>
      <p class="mb-3 flex-1 text-[0.97rem] text-muted">{{ pest.summary }}</p>
      <span class="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600">
        Learn more <Icon name="arrow" class="transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </RouterLink>
</template>
