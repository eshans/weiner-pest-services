import { createRouter, createWebHistory } from 'vue-router'
import { pests } from './data/pests'
import Home from './pages/Home.vue'

const pestRoutes = pests.map((pest) => ({
  path: `/${pest.slug}`,
  component: () => import('./pages/PestDetail.vue'),
  props: { slug: pest.slug },
  meta: { title: pest.name },
}))

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('./pages/About.vue'), meta: { title: 'About Us' } },
  { path: '/areas-we-serve', component: () => import('./pages/Areas.vue'), meta: { title: 'Areas We Serve' } },
  { path: '/services', component: () => import('./pages/Services.vue'), meta: { title: 'Services' } },
  {
    path: '/residential-services',
    component: () => import('./pages/ServiceDetail.vue'),
    props: { kind: 'residential' },
    meta: { title: 'Residential Services' },
  },
  {
    path: '/commercial-services',
    component: () => import('./pages/ServiceDetail.vue'),
    props: { kind: 'commercial' },
    meta: { title: 'Commercial Services' },
  },
  { path: '/pests-we-treat', component: () => import('./pages/Pests.vue'), meta: { title: 'Pests We Treat' } },
  { path: '/pests-old', redirect: '/pests-we-treat' },
  ...pestRoutes,
  { path: '/contact', component: () => import('./pages/Contact.vue'), meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', component: () => import('./pages/NotFound.vue'), meta: { title: 'Page Not Found' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, saved) => saved || { top: 0 },
})

router.afterEach((to) => {
  const base = 'Weiner Pest Services'
  document.title = to.meta.title ? `${to.meta.title} | ${base}` : `${base}, Inc. | Family-Owned NJ Pest Control`
})

export default router
