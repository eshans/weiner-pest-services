<script setup>
import PageHero from '../components/PageHero.vue'
import ContactForm from '../components/ContactForm.vue'
import Icon from '../components/Icon.vue'
import { business, counties, serviceAreas, telHref } from '../data/site'
import nj from '../assets/img/nj.png'
</script>

<template>
  <PageHero
    eyebrow="Areas we serve"
    title="Serving northern New Jersey"
    :lead="`Headquartered in ${business.hq}, serving Essex, Union, Morris, Bergen counties and more.`"
  />

  <section class="section">
    <div class="container-site grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div class="prose-site">
        <h2>Local, and proud of it</h2>
        <p>
          Weiner Pest Services attends to properties across northern New Jersey. If you’re in the area and need to protect your
          property from pests and rodents — or you have a problem you need help with — don’t hesitate to reach out.
        </p>
        <ul class="my-6 flex flex-wrap gap-2">
          <li
            v-for="a in serviceAreas"
            :key="a"
            class="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-[0.95rem] font-medium text-brand-700"
          >
            <Icon name="pin" /> {{ a }} County
          </li>
          <li class="px-2 py-1.5 text-[0.95rem] text-muted">and surrounding areas</li>
        </ul>
        <div class="grid gap-3 sm:grid-cols-3">
          <a
            v-for="c in counties"
            :key="c.name"
            :href="telHref(c.phone)"
            class="flex flex-col rounded-2xl border border-line px-4 py-3.5 no-underline transition hover:border-brand-400 hover:shadow-card"
          >
            <span class="text-sm text-muted">{{ c.name }}</span>
            <strong class="font-display text-lg text-brand-700">{{ c.phone }}</strong>
          </a>
        </div>
      </div>
      <img :src="nj" alt="Map of New Jersey" class="w-full object-contain" />
    </div>
  </section>

  <section class="section bg-brand-50">
    <div class="container-site max-w-3xl">
      <ContactForm title="Not sure if we cover your area? Ask us." subject="Service area question" />
    </div>
  </section>
</template>
