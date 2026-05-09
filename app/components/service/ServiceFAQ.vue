<template>
  <section class="py-16 bg-on-tertiary-container/5">
    <div class="main-container mx-auto px-6 md:px-12">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <h2 v-animate-on-scroll class="text-3xl font-bold font-headline-lg text-tertiary mb-4">Dúvidas Frequentes</h2>
          <p v-animate-on-scroll="'100ms'" class="text-on-tertiary-fixed-variant">Respostas para as principais perguntas sobre este serviço.</p>
        </div>
        
        <div class="space-y-4">
          <details v-for="(faq, index) in faqs" :key="index" v-animate-on-scroll="`${index * 100}ms`" class="group bg-white rounded-2xl border border-tertiary-container/10 overflow-hidden shadow-sm">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-tertiary">
              <span>{{ faq.question }}</span>
              <Icon name="ph:caret-down-bold" class="transition-transform group-open:rotate-180 text-burgundy-800" size="20" />
            </summary>
            <div class="px-6 pb-6 text-on-tertiary-fixed-variant leading-relaxed">
              {{ faq.answer }}
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  faqs: {
    type: Array,
    required: true
  }
})
</script>
