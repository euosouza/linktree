<template>
  <section class="py-20 md:py-32 bg-white relative overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-burgundy-50/30 -skew-x-12 translate-x-1/2"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">
        
        <!-- Left Column: Benefits -->
        <div  class="lg:w-1/2">
          <div class="inline-flex items-center gap-2 text-burgundy-700 font-bold bg-burgundy-100/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-burgundy-200/50">
            <Icon name="ph:microscope-fill" />
            Por que coletar em casa?
          </div>
          <h2 class="text-4xl md:text-6xl font-bold font-headline-lg text-tertiary mb-12 leading-tight">
            Diagnóstico preciso
            <span class="text-burgundy-700">sem traumas</span>.
          </h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div v-for="(b, i) in benefits" :key="i" class="group">
              <div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-burgundy-100 group-hover:bg-burgundy-700 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Icon :name="b.icon" size="28" class="text-burgundy-700 group-hover:text-white transition-colors" />
              </div>
              <h4 class="font-bold text-tertiary text-xl mb-3 group-hover:text-burgundy-800 transition-colors">{{ b.title }}</h4>
              <p class="text-on-tertiary-fixed-variant leading-relaxed text-sm">
                {{ b.desc }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Visual Feature -->
        <div v-animate-on-scroll="'100ms'" class="lg:w-1/2 w-full mt-12 lg:mt-0">
          <div class="relative group perspective-1000">
            <!-- Decorative Glow Behind Card -->
            <div class="absolute -inset-2 bg-gradient-to-r from-teal-500 to-burgundy-500 rounded-[3.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000" aria-hidden="true"></div>
            
            <!-- Main Card -->
            <div class="bg-gradient-to-br from-tertiary to-[#2a2e2e] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 text-white overflow-hidden relative shadow-2xl border border-white/10 transition-transform duration-700 hover:scale-[1.02]">
              
              <!-- Background Pattern -->
              <div class="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
              <div class="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-burgundy-500/10 rounded-full blur-3xl" aria-hidden="true"></div>

              <div class="relative z-10">
                <div class="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 sm:px-4 sm:py-1.5 mb-6 border border-white/10 backdrop-blur-sm max-w-full">
                  <span class="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0" aria-hidden="true">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-teal-500"></span>
                  </span>
                  <span class="text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-teal-100 truncate">Atualização em tempo real</span>
                </div>
                
                <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-headline-lg leading-tight">Resultados na <br/>palma da mão</h3>
                <p class="text-tertiary-fixed-dim text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md">
                  A agilidade é fundamental. Receba os laudos diretamente no seu WhatsApp assim que liberados pelo laboratório.
                </p>

                <!-- WhatsApp Simulation -->
                <div class="flex flex-col space-y-5 relative">
                  <!-- Connection Line -->
                  <div class="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-white/20 to-transparent -z-10" aria-hidden="true"></div>

                  <!-- Message 1 -->
                  <div v-animate-on-scroll="'100ms'" class="bg-white/5 backdrop-blur-md rounded-2xl rounded-tl-none p-3 sm:p-4 border border-white/10 self-start max-w-[92%] sm:max-w-[85%] shadow-lg transform transition-all duration-300 hover:-translate-y-1">
                    <div class="flex items-center gap-2 sm:gap-3 mb-2">
                      <div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-burgundy-500 flex items-center justify-center text-white font-bold text-[10px] sm:text-xs shadow-inner shrink-0" aria-hidden="true">KF</div>
                      <div class="min-w-0">
                        <p class="text-[11px] sm:text-xs font-semibold text-burgundy-200 truncate">Dra. Kelly Fortes</p>
                        <p class="text-[9px] sm:text-[10px] text-white/50">09:41</p>
                      </div>
                    </div>
                    <p class="text-[13px] sm:text-sm text-white/90 leading-relaxed">Olá! O resultado do Hemograma do Totó já está pronto. 🐾</p>
                  </div>

                  <!-- Message 2 -->
                  <div v-animate-on-scroll="'200ms'" class="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl rounded-tr-none p-3 sm:p-4 shadow-xl flex flex-row items-center gap-3 sm:gap-4 self-end max-w-[95%] transform transition-all duration-300 hover:-translate-y-1 border border-teal-400/30">
                    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm shadow-inner hidden sm:flex" aria-hidden="true">
                      <Icon name="ph:file-pdf-fill" size="24" class="text-white drop-shadow-md sm:w-[28px] sm:h-[28px]" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-[13px] sm:text-sm font-bold text-white mb-0.5 truncate">Resultado_Hemograma.pdf</p>
                      <p class="text-[10px] sm:text-xs text-teal-100 font-medium truncate">1.2 MB • Laudo Veterinário</p>
                    </div>
                    <button class="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white transition-colors shadow-sm" aria-label="Baixar resultado do hemograma">
                      <Icon name="ph:download-simple-bold" size="14" class="text-white sm:w-4 sm:h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              <!-- Stats Overlay -->
              <div  class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                <div v-animate-on-scroll="'100ms'" class="flex flex-col">
                  <p class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">24h</p>
                  <p class="text-[10px] sm:text-xs text-teal-200 uppercase tracking-wider font-semibold">Prazo médio</p>
                </div>
                <div v-animate-on-scroll="'150ms'" class="flex flex-col">
                  <p class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">100%</p>
                  <p class="text-[10px] sm:text-xs text-teal-200 uppercase tracking-wider font-semibold">Digital</p>
                </div>
                <div class="col-span-2 md:col-span-1 flex items-center justify-start md:justify-end mt-2 md:mt-0" aria-hidden="true">
                  <div class="flex -space-x-3">
                    <div v-animate-on-scroll="'100ms'" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-tertiary bg-burgundy-400 flex items-center justify-center shadow-md relative z-30 transform hover:scale-110 transition-transform"><Icon name="ph:cat-fill" size="16" class="text-white sm:w-5 sm:h-5"/></div>
                    <div v-animate-on-scroll="'150ms'" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-tertiary bg-teal-500 flex items-center justify-center shadow-md relative z-20 transform hover:scale-110 transition-transform"><Icon name="ph:dog-fill" size="16" class="text-white sm:w-5 sm:h-5"/></div>
                    <div v-animate-on-scroll="'200ms'" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-tertiary bg-burgundy-600 flex items-center justify-center shadow-md relative z-10 transform hover:scale-110 transition-transform"><Icon name="ph:bird-fill" size="16" class="text-white sm:w-5 sm:h-5"/></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Badge -->
            <div v-animate-on-scroll="'300ms'" class="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-4 md:-bottom-8 md:-right-8 bg-white text-tertiary p-3 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl rotate-2 sm:rotate-3 md:block transform transition-all duration-500 hover:rotate-0 hover:scale-105 border border-gray-100 z-20 group-hover:shadow-teal-500/20 max-w-[90%] sm:max-w-none">
              <div class="flex items-center gap-3 md:gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0" aria-hidden="true">
                  <Icon name="ph:check-circle-fill" size="24" class="text-teal-500 sm:w-[32px] sm:h-[32px]" />
                </div>
                <div class="min-w-0">
                  <p class="font-bold text-sm sm:text-lg leading-tight truncate">Laboratórios</p>
                  <p class="text-[10px] sm:text-xs text-gray-500 font-medium truncate">Parceiros de Referência</p>
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
const benefits = [
  { 
    title: 'Fidelidade nos Resultados', 
    desc: 'O estresse altera a glicose e leucócitos. A coleta em casa garante dados 100% reais do seu pet.',
    icon: 'ph:heartbeat-fill'
  },
  { 
    title: 'Coleta Humanizada', 
    desc: 'Técnicas de contenção leve e materiais de ponta para um procedimento rápido e indolor.',
    icon: 'ph:hand-heart-fill'
  },
  { 
    title: 'Segurança Biológica', 
    desc: 'Sem exposição a patógenos de clínicas, o que é vital para animais com imunidade baixa.',
    icon: 'ph:shield-check-fill'
  },
  { 
    title: 'Transporte VIP', 
    desc: 'Amostras acondicionadas em refrigeração imediata e transportadas sob rigoroso controle.',
    icon: 'ph:thermometer-hot-fill'
  }
]
</script>
