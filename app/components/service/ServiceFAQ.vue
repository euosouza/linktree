<template>
  <section v-if="faqs && faqs.length > 0" class="py-16 md:py-32 bg-slate-50 relative overflow-hidden" aria-labelledby="faq-title">
    
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div class="absolute -right-[10%] top-[30%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      <div class="max-w-3xl mx-auto">
        
        <div class="text-center mb-16 flex flex-col items-center">
          <!-- Premium Badge -->
          <div v-animate-on-scroll class="inline-flex items-center gap-2 text-teal-800 font-bold bg-teal-100/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-teal-200/50">
            <Icon name="ph:question-bold" size="18" aria-hidden="true" />
            <span class="text-xs sm:text-sm uppercase tracking-wider">FAQ</span>
          </div>

          <h2 id="faq-title" v-animate-on-scroll="'100ms'" class="text-4xl md:text-5xl lg:text-6xl font-black font-headline-lg text-tertiary mb-6 leading-tight">
            Dúvidas <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500">Frequentes</span>
          </h2>
          
          <p v-animate-on-scroll="'200ms'" class="text-lg md:text-xl text-on-tertiary-fixed-variant leading-relaxed max-w-2xl">
            Abaixo separamos as respostas para as principais perguntas sobre este serviço para te ajudar.
          </p>
        </div>
        
        <div class="space-y-4 md:space-y-6">
          <details 
            v-for="(faq, index) in faqs" 
            :key="index" 
            v-animate-on-scroll="`${(index % 5) * 100}ms`" 
            class="group bg-white rounded-2xl md:rounded-3xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-teal-300"
          >
            <summary class="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none font-bold text-tertiary text-lg md:text-xl group-open:text-teal-800 transition-colors duration-300">
              <span class="pr-6">{{ faq.question }}</span>
              <div class="w-10 h-10 shrink-0 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-teal-50 transition-colors duration-300">
                <Icon name="ph:caret-down-bold" class="transition-transform duration-500 group-open:rotate-180 text-teal-600" size="20" aria-hidden="true" />
              </div>
            </summary>
            <div class="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-base md:text-lg text-on-tertiary-fixed-variant leading-relaxed opacity-0 group-open:opacity-100 transition-opacity duration-500">
              {{ faq.answer }}
            </div>
          </details>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  faqs: { question: string, answer: string }[]
}>()
</script>
