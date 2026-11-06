<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Icon from './Icon.vue'
import BrandMark from './BrandMark.vue'
import { business, telHref } from '../data/site'
import { visiblePests } from '../data/pests'

const route = useRoute()
const menuOpen = ref(false)
const openDropdown = ref(null)

const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'All Services', to: '/services' },
      { label: 'Residential', to: '/residential-services' },
      { label: 'Commercial', to: '/commercial-services' },
    ],
  },
  {
    label: 'Pests We Treat',
    children: [{ label: 'All Pests', to: '/pests-we-treat' }, ...visiblePests.map((p) => ({ label: p.name, to: `/${p.slug}` }))],
  },
  { label: 'Areas We Serve', to: '/areas-we-serve' },
  { label: 'Contact', to: '/contact' },
]

const isSectionActive = (item) => item.children.some((c) => c.to === route.path)

const toggleDropdown = (label) => {
  openDropdown.value = openDropdown.value === label ? null : label
}

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
    openDropdown.value = null
  },
)

const linkClass =
  'flex w-full items-center justify-between gap-1 rounded-lg px-2 py-3 font-display text-base font-medium whitespace-nowrap text-ink no-underline hover:bg-brand-50 hover:text-brand-600 lg:w-auto lg:px-3 lg:py-2 lg:text-[0.92rem]'
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
    <div class="bg-brand-900 text-sm text-brand-100">
      <div class="container-site flex min-h-9 items-center justify-center gap-4 sm:justify-between">
        <span class="hidden sm:block">Family owned &amp; operated since {{ business.founded }}</span>
        <div class="flex items-center gap-5">
          <a :href="`mailto:${business.email}`" class="inline-flex items-center gap-1.5 hover:text-white">
            <Icon name="mail" /> {{ business.email }}
          </a>
          <a :href="business.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="hover:text-white">
            <Icon name="facebook" />
          </a>
        </div>
      </div>
    </div>

    <div class="container-site relative flex h-19 items-center gap-2 sm:gap-6">
      <BrandMark class="mr-auto" />

      <nav
        aria-label="Main"
        class="absolute inset-x-0 top-full max-h-[calc(100vh-7rem)] overflow-y-auto border-b border-line bg-white shadow-lift lg:static lg:block lg:overflow-visible lg:border-0 lg:bg-transparent lg:shadow-none"
        :class="menuOpen ? 'block' : 'hidden'"
      >
        <ul class="flex flex-col px-5 pt-3 pb-5 lg:flex-row lg:gap-1 lg:p-0">
          <li v-for="item in nav" :key="item.label" class="group relative">
            <RouterLink v-if="item.to" :to="item.to" :class="linkClass" exact-active-class="text-brand-600!">
              {{ item.label }}
            </RouterLink>
            <template v-else>
              <button
                :class="[linkClass, 'cursor-pointer', { 'text-brand-600!': isSectionActive(item) }]"
                :aria-expanded="openDropdown === item.label"
                @click="toggleDropdown(item.label)"
              >
                {{ item.label }}
                <Icon
                  name="chevron"
                  class="transition-transform lg:group-hover:rotate-180"
                  :class="{ 'rotate-180': openDropdown === item.label }"
                />
              </button>
              <ul
                class="pl-3 lg:invisible lg:absolute lg:top-[calc(100%+6px)] lg:left-0 lg:block lg:min-w-56 lg:-translate-y-1 lg:rounded-2xl lg:border lg:border-line lg:bg-white lg:p-2 lg:opacity-0 lg:shadow-lift lg:transition lg:before:absolute lg:before:inset-x-0 lg:before:-top-2 lg:before:h-2 lg:group-focus-within:visible lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
                :class="openDropdown === item.label ? 'block lg:visible lg:translate-y-0 lg:opacity-100' : 'hidden'"
              >
                <li v-for="child in item.children" :key="child.to">
                  <RouterLink
                    :to="child.to"
                    class="block rounded-lg px-3 py-2 text-[0.95rem] text-ink no-underline hover:bg-brand-50 hover:text-brand-700"
                    exact-active-class="bg-brand-50 text-brand-700!"
                  >
                    {{ child.label }}
                  </RouterLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </nav>

      <a :href="telHref(business.phone)" class="btn btn-primary max-sm:p-2.5" :aria-label="`Call ${business.phone}`">
        <Icon name="phone" /> <span class="hidden sm:inline">{{ business.phone }}</span>
      </a>

      <button
        class="cursor-pointer p-2 text-brand-900 lg:hidden"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <Icon :name="menuOpen ? 'close' : 'menu'" size="28" />
      </button>
    </div>
  </header>
</template>
