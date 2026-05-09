<template>
  <section class="py-16 bg-white">
    <div class="main-container mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div v-animate-on-scroll>
          <h2 class="text-3xl font-bold font-headline-lg text-tertiary mb-6">O que está incluído</h2>
          <p class="text-on-tertiary-fixed-variant mb-8 leading-relaxed">
            Garantimos um atendimento completo e transparente. Confira tudo o que faz parte deste serviço:
          </p>
          
          <ul class="space-y-4">
            <li v-for="(item, index) in includes" :key="index" class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                <Icon name="ph:check-bold" size="12" class="text-teal-700" />
              </div>
              <span class="text-tertiary font-medium">{{ item }}</span>
            </li>
          </ul>
        </div>
        
        <div v-animate-on-scroll="'200ms'" class="relative">
          <div class="aspect-video bg-burgundy-800/5 rounded-3xl overflow-hidden border border-burgundy-800/10 p-8 flex items-center justify-center">
            <Icon :name="icon" size="120" class="text-burgundy-800/20" />
            <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-tertiary-container/10 hidden md:block">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-teal-100 flex items-center justify-center rounded-xl">
                  <Icon name="ph:clock-fill" class="text-teal-800" size="24" />
                </div>
                <div>
                  <p class="text-xs text-on-tertiary-fixed-variant font-medium">Duração Estimada</p>
                  <p class="font-bold text-tertiary">{{ duration }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  includes: {
    type: Array,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  }
})
</script>
