<script setup>
import { counties, telHref } from '../data/site'

defineProps({ numberClass: { type: String, default: 'text-brand-700' } })
</script>

<template>
  <ul class="space-y-1.5">
    <li v-for="c in counties" :key="c.name" class="flex justify-between gap-4">
      <span>{{ c.name }}</span>
      <a :href="telHref(c.phone)" class="font-medium whitespace-nowrap" :class="numberClass">{{ c.phone }}</a>
    </li>
  </ul>
</template>
