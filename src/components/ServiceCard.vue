<script setup>
import Icon from './Icon.vue'

defineProps({ service: { type: Object, required: true } })
</script>

<template>
  <RouterLink :to="service.to" class="card group">
    <img :src="service.image" :alt="service.title" loading="lazy" class="aspect-2/1 w-full object-cover" />
    <div class="relative px-7 pt-9 pb-7">
      <span class="absolute -top-6.5 left-7 grid size-13 place-items-center rounded-xl bg-brand-600 text-white shadow-card">
        <Icon :name="service.icon" size="26" />
      </span>
      <h3 class="mb-1">{{ service.title }}</h3>
      <p class="mb-3 text-[0.97rem] text-muted">{{ service.summary }}</p>
      <span class="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600">
        Learn more <Icon name="arrow" class="transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </RouterLink>
</template>
