<template>
  <section class="py-16 bg-white">
    <div class="main-container mx-auto px-6 md:px-12">
      <div v-animate-on-scroll class="bg-teal-50 border-2 border-teal-500/20 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
        <div class="w-24 h-24 md:w-32 md:h-32 bg-teal-500 rounded-3xl flex items-center justify-center shrink-0 shadow-xl shadow-teal-500/20">
          <Icon name="ph:heart-break-fill" size="48" class="text-white" />
        </div>
        
        <div>
          <h2 class="text-3xl font-bold font-headline-lg text-teal-900 mb-4">Cuidados Pós-Procedimento</h2>
          <p class="text-teal-800/80 text-lg leading-relaxed mb-6">
            O bem-estar do seu pet continua após a nossa visita. Para uma recuperação tranquila ou manutenção da saúde, siga estas orientações:
          </p>
          <div class="bg-white/60 p-6 rounded-2xl border border-teal-200 text-teal-900 font-medium italic">
            "{{ aftercare }}"
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  aftercare: {
    type: String,
    required: true
  }
})
</script>
