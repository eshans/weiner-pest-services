<script setup>
import PageHero from '../components/PageHero.vue'
import ContactForm from '../components/ContactForm.vue'
import PhoneList from '../components/PhoneList.vue'
import Icon from '../components/Icon.vue'
import { business } from '../data/site'

const cardTitle = 'mb-3 flex items-center gap-2 text-base [&_svg]:text-brand-600'
</script>

<template>
  <PageHero eyebrow="Contact" title="Get in touch" lead="Questions, a new service request, or a free estimate — we’ll get right back to you." />

  <section class="section">
    <div class="container-site grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
      <ContactForm />
      <aside class="grid gap-5">
        <div class="rounded-2xl bg-brand-50 px-6 py-5">
          <h3 :class="cardTitle"><Icon name="phone" /> Call us</h3>
          <PhoneList />
        </div>
        <div class="rounded-2xl bg-brand-50 px-6 py-5">
          <h3 :class="cardTitle"><Icon name="mail" /> Email</h3>
          <a :href="`mailto:${business.email}`" class="link">{{ business.email }}</a>
        </div>
        <div class="rounded-2xl bg-brand-50 px-6 py-5">
          <h3 :class="cardTitle"><Icon name="facebook" /> Follow us</h3>
          <a :href="business.facebook" target="_blank" rel="noopener noreferrer" class="link">Weiner Pest Services on Facebook</a>
        </div>
      </aside>
    </div>
  </section>
</template>
