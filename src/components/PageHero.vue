<script setup>
defineProps({
  eyebrow: String,
  title: { type: String, required: true },
  lead: String,
  image: String,
  compact: Boolean,
})
</script>

<template>
  <section
    class="relative overflow-hidden bg-linear-to-br from-brand-700 to-brand-400 text-white"
    :class="compact ? 'py-10' : 'py-12 md:py-18'"
  >
    <img v-if="image" :src="image" alt="" class="absolute inset-0 size-full object-cover opacity-20 mix-blend-luminosity" />
    <div class="container-site relative">
      <slot name="above" />
      <p v-if="eyebrow" class="eyebrow text-brand-100">{{ eyebrow }}</p>
      <h1 class="mb-3 max-w-[20em] text-white">{{ title }}</h1>
      <p v-if="lead" class="max-w-[40em] text-lg text-white/90">{{ lead }}</p>
    </div>
  </section>
</template>
