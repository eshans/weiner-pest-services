<script setup>
import Icon from '../components/Icon.vue'
import PestCard from '../components/PestCard.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { business, telHref } from '../data/site'
import { visiblePests } from '../data/pests'
import { services } from '../data/services'
import truck from '../assets/img/truck.jpg'
import tech from '../assets/img/wpsjustin.jpg'

const yearsInBusiness = new Date().getFullYear() - business.founded

const trust = [
  { icon: 'family', title: 'Family owned', text: `Serving NJ for ${yearsInBusiness}+ years` },
  { icon: 'shield', title: 'Licensed & insured', text: business.license },
  { icon: 'leaf', title: 'Integrated Pest Mgmt', text: 'Effective with fewer materials' },
  { icon: 'pin', title: 'Local experts', text: 'Essex, Union, Morris & Bergen' },
]
</script>

<template>
  <section
    class="bg-[radial-gradient(1200px_500px_at_85%_-10%,var(--color-brand-100),transparent_60%),linear-gradient(180deg,var(--color-brand-50),#fff)] py-12 md:py-24"
  >
    <div class="container-site grid items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-14">
      <div>
        <p class="eyebrow">Northern New Jersey pest control since {{ business.founded }}</p>
        <h1 class="mb-4">Protecting your home, your family, and the environment.</h1>
        <p class="max-w-[34em] text-lg text-muted">
          Weiner Pest Services is a family-owned company with over {{ yearsInBusiness }} years of experience. Safe, effective
          treatment for homes and businesses — with a free estimate.
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <a :href="telHref(business.phone)" class="btn btn-primary btn-lg"><Icon name="phone" /> Call {{ business.phone }}</a>
          <RouterLink to="/contact" class="btn btn-ghost btn-lg">Get a free estimate</RouterLink>
        </div>
      </div>
      <div class="relative">
        <img :src="truck" alt="Weiner Pest Services truck" class="aspect-4/3 w-full rounded-3xl object-cover shadow-lift" />
        <div class="absolute -bottom-6 left-4 flex flex-col rounded-2xl bg-accent px-6 py-4 leading-tight text-white shadow-lift md:-left-6">
          <strong class="font-display text-3xl">{{ yearsInBusiness }}+</strong>
          <span class="text-sm">years in business</span>
        </div>
      </div>
    </div>
  </section>

  <section class="border-b border-line py-7">
    <div class="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="t in trust" :key="t.title" class="flex items-center gap-3.5">
        <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
          <Icon :name="t.icon" size="24" />
        </span>
        <div class="leading-snug">
          <strong class="block font-display text-[0.95rem] text-brand-900">{{ t.title }}</strong>
          <span class="text-sm text-muted">{{ t.text }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-site">
      <div class="mb-9 max-w-xl">
        <p class="eyebrow">What we do</p>
        <h2>Services for every property</h2>
      </div>
      <div class="grid gap-7 md:grid-cols-2">
        <ServiceCard v-for="s in services" :key="s.to" :service="s" />
      </div>
    </div>
  </section>

  <section class="section bg-brand-50">
    <div class="container-site">
      <div class="mb-9 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="eyebrow">Pests we treat</p>
          <h2>From ants to termites, we’ve seen it all</h2>
        </div>
        <RouterLink to="/pests-we-treat" class="btn btn-ghost">View all pests</RouterLink>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PestCard v-for="p in visiblePests.slice(0, 6)" :key="p.slug" :pest="p" />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-site grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <img :src="tech" alt="Weiner Pest Services technician in protective gear" class="aspect-4/3 w-full rounded-3xl object-cover shadow-card" />
      <div class="prose-site">
        <p class="eyebrow">Our mission</p>
        <h2>No job is too small.</h2>
        <p>
          We believe a close relationship with our customers builds trust, confidence, and reliability. Seeing pests or
          rodents can be unnerving, so we make their removal quick, safe, and easy.
        </p>
        <p>
          Safety is at the center of everything we do. Our technicians use formulations and treatment techniques that
          minimize the amount of material used and the potential for exposure to people, pets, and the environment.
        </p>
        <RouterLink to="/about" class="btn btn-ghost">More about us</RouterLink>
      </div>
    </div>
  </section>
</template>
