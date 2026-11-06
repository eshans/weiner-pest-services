<script setup>
import PageHero from '../components/PageHero.vue'
import PestCard from '../components/PestCard.vue'
import { visiblePests } from '../data/pests'
</script>

<template>
  <PageHero
    eyebrow="Pests we treat"
    title="Whatever’s bugging you, we can help"
    lead="Bed bugs, roaches, rodents, wasps, termites, and more. Choose a pest to learn about signs, prevention, and treatment."
  />

  <section class="section">
    <div class="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <PestCard v-for="p in visiblePests" :key="p.slug" :pest="p" />
    </div>
  </section>
</template>
