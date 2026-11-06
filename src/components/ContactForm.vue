<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { emailjs as config, business } from '../data/site'

const props = defineProps({
  title: { type: String, default: 'Request a free estimate' },
  subject: { type: String, default: 'General inquiry' },
})

const status = ref('idle') // idle | sending | sent | error
const errorText = ref('')

async function submit(e) {
  status.value = 'sending'
  try {
    await emailjs.sendForm(config.serviceId, config.templateId, e.target, { publicKey: config.publicKey })
    status.value = 'sent'
    e.target.reset()
  } catch (err) {
    errorText.value = err?.text || 'Please try again, or give us a call.'
    status.value = 'error'
  }
}
</script>

<template>
  <div class="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
    <h2 class="mb-1 text-2xl md:text-2xl">{{ props.title }}</h2>
    <p class="mb-5 text-[0.95rem] text-muted">Fill out the form and someone from our team will get back to you shortly.</p>

    <div v-if="status === 'sent'" class="rounded-lg bg-accent-50 p-4 text-[0.95rem] text-[#0d6b44]" role="status">
      <strong>Thanks — your message was sent.</strong> We’ll be in touch soon.
      <button class="ml-1 cursor-pointer text-brand-700 underline" @click="status = 'idle'">Send another</button>
    </div>

    <form v-else class="space-y-4" @submit.prevent="submit">
      <input type="hidden" name="subject" :value="props.subject" />
      <div class="grid gap-4 sm:grid-cols-2">
        <label>
          <span class="field-label">Name</span>
          <input name="user_name" type="text" autocomplete="name" required class="field-input" />
        </label>
        <label>
          <span class="field-label">Phone</span>
          <input name="user_phone" type="tel" autocomplete="tel" class="field-input" />
        </label>
      </div>
      <label class="block">
        <span class="field-label">Email</span>
        <input name="user_email" type="email" autocomplete="email" required class="field-input" />
      </label>
      <fieldset>
        <legend class="field-label">Are you a current customer?</legend>
        <div class="flex gap-3">
          <label
            v-for="opt in ['Yes', 'No']"
            :key="opt"
            class="inline-flex cursor-pointer items-center gap-2 rounded-full border-[1.5px] border-line px-4 py-2 has-checked:border-brand-400 has-checked:bg-brand-50 has-checked:text-brand-700"
          >
            <input type="radio" name="customer" :value="opt" required class="accent-brand-600" /> {{ opt }}
          </label>
        </div>
      </fieldset>
      <label class="block">
        <span class="field-label">How can we help?</span>
        <textarea name="user_message" rows="5" required placeholder="Tell us what you’re seeing and where…" class="field-input resize-y" />
      </label>

      <p v-if="status === 'error'" class="rounded-lg bg-red-50 p-4 text-[0.95rem] text-red-800" role="alert">
        Something went wrong: {{ errorText }} You can also call {{ business.phone }}.
      </p>

      <button type="submit" class="btn btn-primary w-full" :disabled="status === 'sending'">
        {{ status === 'sending' ? 'Sending…' : 'Send message' }}
      </button>
    </form>
  </div>
</template>
