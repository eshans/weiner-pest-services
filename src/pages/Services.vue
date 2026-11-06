<script setup>
import PageHero from '../components/PageHero.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { services } from '../data/services'
</script>

<template>
  <PageHero
    eyebrow="Services"
    title="Pest control for homes and businesses"
    lead="Thorough inspections, targeted treatment, and advice to keep pests from coming back."
  />

  <section class="section">
    <div class="container-site grid gap-7 md:grid-cols-2">
      <ServiceCard v-for="s in services" :key="s.to" :service="s" />
    </div>
  </section>
</template>
