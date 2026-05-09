<template>
  <section class="py-16 md:py-24 bg-on-tertiary-container/5">
    <div class="main-container mx-auto px-6 md:px-12">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <div v-animate-on-scroll class="lg:w-1/2">
          <div class="inline-flex items-center gap-2 text-teal-700 font-label-md bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/30 mb-8">
            <Icon name="ph:clipboard-text-fill" size="18" />
            Preparação Importante
          </div>
          <h2 class="text-3xl md:text-5xl font-bold font-headline-lg text-tertiary mb-8 leading-tight">
            Como preparar seu pet para o exame?
          </h2>
          <p class="text-lg text-on-tertiary-fixed-variant mb-10 leading-relaxed">
            Para garantir a precisão dos resultados, alguns cuidados são fundamentais antes da chegada da Dra. Kelly. Siga este checklist simples:
          </p>
          
          <div class="space-y-6">
            <div v-for="(item, i) in checklist" :key="i" class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-1">
                <Icon name="ph:check-bold" class="text-teal-700" />
              </div>
              <div>
                <h4 class="font-bold text-tertiary text-lg">{{ item.title }}</h4>
                <p class="text-on-tertiary-fixed-variant">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-animate-on-scroll="'200ms'" class="lg:w-1/2 w-full">
          <div class="relative bg-burgundy-700 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden shadow-2xl">

            <div class="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div class="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                  <Icon name="ph:whatsapp-logo-fill" size="32" class="text-white" />
                </div>
                <h3 class="text-3xl font-bold mb-6 leading-tight">Dúvidas sobre o preparo?</h3>
                <p class="text-xl text-burgundy-100 leading-relaxed mb-8">
                  Cada pet é único. Nossa equipe envia orientações detalhadas via WhatsApp logo após o agendamento do exame.
                </p>
              </div>

              <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
                  <p class="text-sm font-bold uppercase tracking-wider text-teal-300">Suporte Ativo</p>
                </div>
                <p class="text-sm opacity-90">
                  Ficamos à disposição para tirar dúvidas sobre jejum, medicamentos e comportamento do pet antes da coleta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  checklist: { title: string, description: string }[]
}>()
</script>
