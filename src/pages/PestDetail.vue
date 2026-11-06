<script setup>
import { computed } from 'vue'
import PageHero from '../components/PageHero.vue'
import ContactForm from '../components/ContactForm.vue'
import Icon from '../components/Icon.vue'
import { findPest, visiblePests } from '../data/pests'
import { business, telHref } from '../data/site'

const props = defineProps({ slug: { type: String, required: true } })
const pest = computed(() => findPest(props.slug))
const others = computed(() => visiblePests.filter((p) => p.slug !== props.slug))
</script>

<template>
  <PageHero :title="pest.name" :lead="pest.summary" compact>
    <template #above>
      <nav class="mb-2 text-sm text-brand-100" aria-label="Breadcrumb">
        <RouterLink to="/pests-we-treat" class="text-white underline-offset-2 hover:underline">Pests we treat</RouterLink>
        / <span>{{ pest.name }}</span>
      </nav>
    </template>
  </PageHero>

  <section class="section">
    <div class="container-site grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
      <article class="prose-site">
        <img v-if="pest.image" :src="pest.image" :alt="pest.name" class="mb-7 aspect-video w-full rounded-2xl object-cover" />
        <p v-for="(para, i) in pest.body" :key="i">{{ para }}</p>
        <div class="mt-8 flex items-start gap-4 rounded-lg border-l-4 border-accent bg-accent-50 px-5 py-4">
          <Icon name="phone" size="24" class="mt-0.5 text-accent" />
          <div>
            <strong class="block text-brand-900">Think you have {{ pest.name.toLowerCase() }}?</strong>
            Call <a :href="telHref(business.phone)" class="link">{{ business.phone }}</a> for a free estimate.
          </div>
        </div>
      </article>
      <aside class="grid gap-5 lg:sticky lg:top-32">
        <ContactForm :title="`Get help with ${pest.name.toLowerCase()}`" :subject="`${pest.name} inquiry`" />
        <div class="rounded-2xl bg-brand-50 px-6 py-5">
          <h3 class="mb-2 text-base">Other pests we treat</h3>
          <ul class="columns-2 space-y-1">
            <li v-for="p in others" :key="p.slug"><RouterLink :to="`/${p.slug}`" class="link">{{ p.name }}</RouterLink></li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>
