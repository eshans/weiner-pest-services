<script setup>
import PageHero from '../components/PageHero.vue'
import { business } from '../data/site'
import truck from '../assets/img/truck.jpg'
import tech from '../assets/img/wpsjustin2.jpg'
import njpma from '../assets/img/njpma.png'
import npma from '../assets/img/npma.gif'

const yearsInBusiness = new Date().getFullYear() - business.founded
</script>

<template>
  <PageHero
    eyebrow="About us"
    title="Protecting your children, your pets, and the environment"
    :lead="`Family owned and operated for over ${yearsInBusiness} years.`"
  />

  <section class="section">
    <div class="container-site grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div class="prose-site">
        <p>
          Weiner Pest Services has been in business since {{ business.founded }} and is family owned and operated. We carry
          public liability insurance, we’re members of the New Jersey Pest Management Association and the National Pest
          Management Association, and we’re registered with the New Jersey Department of Environmental Protection
          ({{ business.license }}).
        </p>
        <p>
          We’re dedicated to your health, comfort, and peace of mind, as well as the protection of your property. Safety is at
          the center of everything we do — the community, our clients, and our clients’ children, pets, homes, and the
          environment are of paramount importance to us.
        </p>
        <div class="mt-6 flex items-center gap-6">
          <img :src="njpma" alt="New Jersey Pest Management Association" class="h-18 w-auto" />
          <img :src="npma" alt="National Pest Management Association member" class="h-18 w-auto" />
        </div>
      </div>
      <img :src="truck" alt="Weiner Pest Services truck" class="aspect-4/3 w-full rounded-3xl object-cover shadow-card" />
    </div>
  </section>

  <section class="section bg-brand-50">
    <div class="container-site grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <img
        :src="tech"
        alt="Weiner Pest Services technician"
        class="order-2 aspect-3/4 max-h-[560px] w-full rounded-3xl object-cover shadow-card md:order-none"
      />
      <div class="prose-site">
        <h2>Integrated Pest Management</h2>
        <p>
          We stay current with the latest technology — our industry has changed tremendously over the years we’ve been in
          business. Throughout, we’ve used an Integrated Pest Management (IPM) program. The goal of IPM is to deliver effective
          pest control while reducing the amount of materials used.
        </p>
        <p>
          Our technicians use formulations and treatment techniques that minimize materials and the potential for exposure to
          people and the environment. Please don’t hesitate to call us with any questions.
        </p>
        <h2>Our mission</h2>
        <p>
          At Weiner Pest Services, no job is too small. A close relationship with our customers ensures that trust, confidence,
          and reliability are part of everything we do. We understand that seeing pests or rodents can be unnerving, so we aim
          to make their removal quick, safe, and easy.
        </p>
      </div>
    </div>
  </section>
</template>
