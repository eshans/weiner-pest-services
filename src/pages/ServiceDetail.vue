<script setup>
import { computed } from 'vue'
import PageHero from '../components/PageHero.vue'
import ContactForm from '../components/ContactForm.vue'
import Icon from '../components/Icon.vue'
import { services } from '../data/services'

const props = defineProps({ kind: { type: String, required: true } })
const service = computed(() => services[props.kind])
</script>

<template>
  <PageHero eyebrow="Services" :title="service.title" :lead="service.summary" :image="service.image" />

  <section class="section">
    <div class="container-site grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
      <div class="prose-site">
        <p v-for="(para, i) in service.body" :key="i">{{ para }}</p>
        <h2>{{ kind === 'commercial' ? 'Industries we serve' : 'What’s included' }}</h2>
        <ul class="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          <li v-for="h in service.highlights" :key="h" class="flex items-center gap-2.5">
            <Icon name="shield" class="text-accent" /> {{ h }}
          </li>
        </ul>
      </div>
      <aside class="lg:sticky lg:top-32">
        <ContactForm :subject="service.title" />
      </aside>
    </div>
  </section>
</template>
