<script setup lang="ts">
</script>

<template>
  <section 
    class="py-12 md:py-24 relative bg-white md:scroll-mt-20" 
    id="depoimentos"
    aria-labelledby="testimonials-title"
  >
    
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[15%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -left-[10%] bottom-[5%] w-[25rem] h-[25rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Section Header -->
      <div v-animate-on-scroll class="text-center max-w-4xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
        <!-- Premium Badge -->
        <div class="inline-flex items-center gap-2 text-teal-800 font-bold bg-teal-50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-teal-100">
          <Icon name="ph:star-fill" size="18" aria-hidden="true" />
          <span class="text-xs sm:text-sm uppercase tracking-widest">Depoimentos</span>
        </div>

        <h2 id="testimonials-title" class="text-3xl md:text-5xl font-bold font-headline-lg text-tertiary mb-10 leading-tight">
          Confiança e <span class="text-teal-700">Excelência</span>
        </h2>
        
        <p class="text-lg md:text-xl text-on-tertiary-fixed-variant leading-relaxed max-w-2xl">
          Confira relatos de quem já escolheu o cuidado domiciliar e percebeu a diferença no bem-estar do seu pet.
        </p>
      </div>
      
      <!-- Unified Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

        <!-- Testimonial 1 -->
        <div v-animate-on-scroll="'100ms'" class="md:col-span-7 group bg-white p-6 sm:p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between relative overflow-hidden h-full">
          <!-- Hover Glow -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-teal-50/50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
          
          <div class="relative z-10">
            <div class="flex gap-1 mb-8">
              <Icon v-for="i in 5" :key="i" name="ph:star-fill" class="text-amber-400 text-lg md:text-xl" />
            </div>
            <p class="text-base md:text-xl text-tertiary italic leading-relaxed mb-8 md:mb-10">
              "A praticidade de não precisar estressar meu gato levando na clínica é incrível. A Dra. Kelly é muito paciente e atenciosa. Recomendo para todos que buscam carinho e profissionalismo."
            </p>
          </div>
          
          <div class="flex items-center gap-4 mt-auto pt-8 border-t border-slate-50 relative z-10">
            <div class="w-14 h-14 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-center font-bold text-teal-700 text-xl shadow-sm shrink-0 group-hover:bg-teal-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              M
            </div>
            <div>
              <p class="font-bold text-lg text-tertiary group-hover:text-teal-700 transition-colors duration-300">Mariana &amp; Pipoca</p>
              <p class="text-sm text-on-tertiary-fixed-variant font-medium">Tutora de Felino</p>
            </div>
          </div>
        </div>

        <!-- Trust Badge -->
        <div v-animate-on-scroll="'150ms'" class="md:col-span-5 group bg-burgundy-900 text-white rounded-[2.5rem] flex flex-col justify-center items-center text-center p-6 sm:p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden border border-burgundy-800">
          <!-- Decorative Glow -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-burgundy-400/20 blur-3xl rounded-full group-hover:bg-burgundy-400/40 transition-colors duration-500" aria-hidden="true"></div>
          
          <div class="relative z-10 flex flex-col items-center">
            <div class="w-20 h-20 bg-burgundy-800/50 rounded-3xl flex items-center justify-center mb-6 backdrop-blur-md border border-burgundy-700/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Icon name="ph:smiley-wink-fill" size="44" class="text-burgundy-100" />
            </div>
            <p class="text-5xl md:text-6xl font-black font-headline-lg mb-2 text-white">500+</p>
            <p class="text-burgundy-100/90 text-lg md:text-xl font-medium max-w-[200px]">Pets atendidos com amor este ano</p>
          </div>
        </div>

        <!-- FAQ -->
        <div v-animate-on-scroll="'250ms'" class="md:col-span-5 bg-teal-50 border border-slate-100 p-6 sm:p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full md:scroll-mt-24" id="faq">
          <div class="flex items-center justify-between mb-10">
            <h3 class="text-2xl font-bold text-tertiary font-headline-lg">Dúvidas Frequentes</h3>
            <NuxtLink to="/faq" class="text-xs font-bold text-teal-700 hover:text-teal-900 hover:underline uppercase tracking-widest flex items-center gap-1 transition-all group">
              Ver todas
              <Icon name="ph:arrow-right-bold" class="group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
          
          <div class="space-y-4">
            <details 
              v-for="(item, index) in [
                { q: 'Qual a região atendida?', a: 'Atendemos em domicílio em um raio de até 30km de <strong>São Paulo (Capital)</strong> e região metropolitana.' },
                { q: 'Quais animais atendem?', a: 'A Dra. Kelly é especializada no atendimento clínico de <strong>cães e gatos</strong> de todas as idades.' },
                { q: 'Aceita plano de saúde?', a: 'Fornecemos recibos para você solicitar o <strong>reembolso</strong> junto ao seu plano de saúde.' }
              ]" 
              :key="index"
              class="group bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-teal-200"
            >
              <summary class="flex justify-between items-center p-5 cursor-pointer list-none font-bold text-tertiary text-sm md:text-base">
                <span>{{ item.q }}</span>
                <div class="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                  <Icon name="ph:caret-down-bold" class="transition-transform duration-300 group-open:rotate-180 text-teal-700" size="16" />
                </div>
              </summary>
              <div class="px-5 pb-5 text-sm md:text-base text-on-tertiary-fixed-variant leading-relaxed border-t border-slate-50 pt-4" v-html="item.a"></div>
            </details>
          </div>

          <NuxtLink to="/faq" class="mt-auto pt-8 text-center text-sm font-bold text-teal-700 hover:text-teal-900 transition-colors hidden md:block">
            Ainda tem dúvidas? Acesse nossa central de ajuda.
          </NuxtLink>
        </div>

        <!-- Testimonial 2 -->
        <div v-animate-on-scroll="'200ms'" class="md:col-span-7 group bg-white p-6 sm:p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between relative overflow-hidden h-full">
          <!-- Hover Glow -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-burgundy-50/50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
          
          <div class="relative z-10">
            <div class="flex gap-1 mb-8">
              <Icon v-for="i in 5" :key="i" name="ph:star-fill" class="text-amber-400 text-lg md:text-xl" />
            </div>
            <p class="text-base md:text-xl text-tertiary italic leading-relaxed mb-8 md:mb-10">
              "Melhor experiência veterinária que já tive. O cuidado em casa faz toda a diferença para o meu cachorro idoso, que tem dificuldades de locomoção. Um alívio ter esse serviço por perto."
            </p>
          </div>
          
          <div class="flex items-center gap-4 mt-auto pt-8 border-t border-slate-50 relative z-10">
            <div class="w-14 h-14 bg-burgundy-50 border border-burgundy-100 rounded-2xl flex items-center justify-center font-bold text-burgundy-700 text-xl shadow-sm shrink-0 group-hover:bg-burgundy-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              R
            </div>
            <div>
              <p class="font-bold text-lg text-tertiary group-hover:text-burgundy-700 transition-colors duration-300">Roberto &amp; Thor</p>
              <p class="text-sm text-on-tertiary-fixed-variant font-medium">Tutor de Canino</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
