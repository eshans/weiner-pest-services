<script setup>
import Icon from './Icon.vue'
import BrandMark from './BrandMark.vue'
import PhoneList from './PhoneList.vue'
import { business, telHref } from '../data/site'
import { visiblePests } from '../data/pests'
import njpma from '../assets/img/njpma.png'
import npma from '../assets/img/npma.gif'

const year = new Date().getFullYear()

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Residential', to: '/residential-services' },
  { label: 'Commercial', to: '/commercial-services' },
  { label: 'Areas We Serve', to: '/areas-we-serve' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <section class="bg-linear-to-br from-brand-600 to-brand-400 py-11 text-white">
    <div class="container-site flex flex-wrap items-center justify-between gap-6">
      <div>
        <h2 class="mb-1 text-white">Seeing pests? Let’s take care of it.</h2>
        <p class="text-white/90">Call today for a free estimate — no job too big or too small.</p>
      </div>
      <div class="flex flex-wrap gap-3">
        <a :href="telHref(business.phone)" class="btn bg-white text-brand-700 hover:text-accent">
          <Icon name="phone" /> {{ business.phone }}
        </a>
        <RouterLink to="/contact" class="btn border-white/60 text-white hover:border-white hover:bg-white/10">
          Send a message
        </RouterLink>
      </div>
    </div>
  </section>

  <footer class="bg-brand-900 pt-14 text-[0.95rem] text-[#b9d3e0] [&_a:hover]:text-white">
    <div class="container-site grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
      <div>
        <BrandMark light />
        <p class="my-4">
          Family-owned pest control serving northern New Jersey since {{ business.founded }}. Licensed and insured —
          {{ business.license }}.
        </p>
        <div class="flex gap-3">
          <img :src="njpma" alt="Member, New Jersey Pest Management Association" class="h-14 w-auto rounded-lg bg-white p-1" />
          <img :src="npma" alt="Member, National Pest Management Association" class="h-14 w-auto rounded-lg bg-white p-1" />
        </div>
      </div>

      <div>
        <h3 class="mb-4 text-sm tracking-widest text-white uppercase">Pests</h3>
        <ul class="space-y-1.5">
          <li v-for="p in visiblePests" :key="p.slug"><RouterLink :to="`/${p.slug}`">{{ p.name }}</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 text-sm tracking-widest text-white uppercase">Company</h3>
        <ul class="space-y-1.5">
          <li v-for="l in companyLinks" :key="l.to"><RouterLink :to="l.to">{{ l.label }}</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 text-sm tracking-widest text-white uppercase">Call Us</h3>
        <PhoneList number-class="text-white" />
        <a :href="`mailto:${business.email}`" class="mt-3 inline-flex items-center gap-1.5"><Icon name="mail" /> {{ business.email }}</a>
      </div>
    </div>
    <div class="container-site flex items-center justify-between border-t border-white/10 py-5 text-sm">
      <span>© {{ year }} {{ business.name }} · {{ business.hq }}</span>
      <a :href="business.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" size="20" /></a>
    </div>
  </footer>
</template>
