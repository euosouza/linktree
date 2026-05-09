<script setup lang="ts">
</script>

<template>
  <section class="py-16 md:py-32 relative overflow-hidden bg-white md:scroll-mt-20" id="depoimentos">
    
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div class="absolute -right-[10%] -top-[10%] w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-[100px]"></div>
      <div class="absolute -left-[10%] top-[40%] w-[30rem] h-[30rem] bg-burgundy-500/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Header -->
      <div v-animate-on-scroll class="md:max-w-4xl mx-auto mb-16 flex flex-col items-center">
        <!-- Premium Badge -->
        <div class="inline-flex items-center gap-2 text-teal-800 font-bold bg-teal-100/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-teal-200/50">
          <Icon name="ph:star-fill" size="18" aria-hidden="true" />
          <span class="text-xs sm:text-sm uppercase tracking-wider">Depoimentos</span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black font-headline-lg text-tertiary mb-6 text-center leading-tight">
          Confiança e <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500">Excelência</span>
        </h2>
        
        <p class="text-lg md:text-xl text-on-tertiary-fixed-variant text-center leading-relaxed max-w-2xl">
          Confira relatos de quem já escolheu o cuidado domiciliar e percebeu a diferença no bem-estar do seu pet.
        </p>
      </div>
      
      <!-- Unified Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 lg:gap-8">

        <!-- Testimonial 1 -->
        <div v-animate-on-scroll="'100ms'" class="order-2 md:order-none md:col-span-7 md:row-span-1 group bg-white p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
          
          <div class="relative z-10">
            <div class="flex gap-1 mb-6">
              <Icon v-for="i in 5" :key="i" name="ph:star-fill" class="text-yellow-400 text-lg md:text-xl" />
            </div>
            <p class="text-lg md:text-xl text-tertiary italic leading-relaxed mb-8">
              "A praticidade de não precisar estressar meu gato levando na clínica é incrível. A Dra. é muito paciente e atenciosa. Recomendo para todos que buscam carinho e profissionalismo."
            </p>
          </div>
          
          <div class="flex items-center gap-4 mt-auto relative z-10">
            <div class="w-12 h-12 md:w-14 md:h-14 bg-teal-50 rounded-2xl flex items-center justify-center font-bold text-teal-700 text-lg md:text-xl border border-teal-100 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
              M
            </div>
            <div>
              <p class="font-bold text-base text-tertiary group-hover:text-teal-800 transition-colors duration-300">Mariana &amp; Pipoca</p>
              <p class="text-sm text-on-tertiary-fixed-variant">Tutor de Gato</p>
            </div>
          </div>
        </div>

        <!-- Trust Badge -->
        <div v-animate-on-scroll="'150ms'" class="order-1 md:order-none md:col-span-5 md:row-span-1 group bg-gradient-to-br from-burgundy-800 to-burgundy-950 text-white rounded-3xl md:rounded-[2.5rem] flex flex-col justify-center items-center text-center p-8 md:p-12 shadow-lg hover:shadow-2xl transition-transform duration-500 hover:scale-[1.02] relative overflow-hidden border border-white/10">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true"></div>
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-burgundy-500/20 blur-3xl rounded-full group-hover:bg-burgundy-500/40 transition-colors duration-500" aria-hidden="true"></div>
          
          <div class="relative z-10 flex flex-col items-center">
            <Icon name="ph:smiley-wink-fill" class="text-5xl md:text-6xl mb-4 text-burgundy-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
            <p class="text-4xl md:text-5xl font-black font-headline-lg mb-2">500+</p>
            <p class="text-burgundy-100/90 text-base md:text-lg font-medium">Pets atendidos com amor este ano</p>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div v-animate-on-scroll="'200ms'" class="order-3 md:order-last md:col-span-7 md:row-span-1 group bg-white p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-burgundy-50/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
          
          <div class="relative z-10">
            <div class="flex gap-1 mb-6">
              <Icon v-for="i in 5" :key="i" name="ph:star-fill" class="text-yellow-400 text-lg md:text-xl" />
            </div>
            <p class="text-lg md:text-xl text-tertiary italic leading-relaxed mb-8">
              "Melhor experiência veterinária que já tive. O cuidado em casa faz toda a diferença para o meu cachorro idoso, que tem dificuldades de locomoção. Um alívio ter esse serviço."
            </p>
          </div>
          
          <div class="flex items-center gap-4 mt-auto relative z-10">
            <div class="w-12 h-12 md:w-14 md:h-14 bg-burgundy-50 rounded-2xl flex items-center justify-center font-bold text-burgundy-700 text-lg md:text-xl border border-burgundy-100 group-hover:bg-burgundy-700 group-hover:text-white transition-colors duration-300">
              R
            </div>
            <div>
              <p class="font-bold text-base text-tertiary group-hover:text-burgundy-800 transition-colors duration-300">Roberto &amp; Thor</p>
              <p class="text-sm text-on-tertiary-fixed-variant">Tutor de Cachorro</p>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div v-animate-on-scroll="'250ms'" class="order-4 md:order-none md:col-span-5 md:row-span-1 bg-slate-50/50 border border-slate-100 p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] flex flex-col h-full md:scroll-mt-20" id="faq">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold text-tertiary font-headline-lg">Dúvidas Frequentes</h2>
            <NuxtLink to="/faq" class="text-xs font-bold text-teal-700 hover:text-teal-900 hover:underline uppercase tracking-widest flex items-center gap-1 transition-colors">
              Ver todas
              <Icon name="ph:arrow-right-bold" />
            </NuxtLink>
          </div>
          
          <div class="space-y-4">
            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-teal-200">
              <summary class="flex justify-between items-center p-5 cursor-pointer list-none font-bold text-tertiary text-sm md:text-base">
                <span>Qual a região atendida?</span>
                <Icon name="ph:caret-down-bold" class="transition-transform duration-300 group-open:rotate-180 text-teal-700" size="18" />
              </summary>
              <div class="px-5 pb-5 text-sm md:text-base text-on-tertiary-fixed-variant leading-relaxed">
                Atendemos em domicílio em um raio de até 30km de <strong>São Paulo (Capital)</strong> e região metropolitana.
              </div>
            </details>

            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-teal-200">
              <summary class="flex justify-between items-center p-5 cursor-pointer list-none font-bold text-tertiary text-sm md:text-base">
                <span>Quais animais atendem?</span>
                <Icon name="ph:caret-down-bold" class="transition-transform duration-300 group-open:rotate-180 text-teal-700" size="18" />
              </summary>
              <div class="px-5 pb-5 text-sm md:text-base text-on-tertiary-fixed-variant leading-relaxed">
                A Dra. Kelly é especializada no atendimento clínico de <strong>cães e gatos</strong> de todas as idades.
              </div>
            </details>

            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-teal-200">
              <summary class="flex justify-between items-center p-5 cursor-pointer list-none font-bold text-tertiary text-sm md:text-base">
                <span>Aceita plano de saúde?</span>
                <Icon name="ph:caret-down-bold" class="transition-transform duration-300 group-open:rotate-180 text-teal-700" size="18" />
              </summary>
              <div class="px-5 pb-5 text-sm md:text-base text-on-tertiary-fixed-variant leading-relaxed">
                Não trabalhamos com convênio direto, mas fornecemos recibos para você solicitar o <strong>reembolso</strong> junto ao seu plano.
              </div>
            </details>
          </div>

          <NuxtLink to="/faq" class="mt-auto pt-8 text-center text-sm font-bold text-teal-700 hover:text-teal-900 transition-colors hidden md:block">
            Ainda tem dúvidas? Acesse nossa central de ajuda completa.
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>
