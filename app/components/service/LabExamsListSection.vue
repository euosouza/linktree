<template>
  <section class="py-16 md:py-32 bg-white relative overflow-hidden">
    <!-- Subtle Background Decors (Reduced and refined) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] bottom-[10%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -left-[10%] top-[10%] w-[25rem] h-[25rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      <!-- Section Header -->
      <div v-animate-on-scroll class="text-center max-w-4xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
        <!-- Premium Badge -->
        <div class="inline-flex items-center gap-2 text-teal-800 font-bold bg-teal-50/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-teal-100">
          <Icon name="ph:flask-fill" size="18" aria-hidden="true" />
          <span class="text-xs sm:text-sm uppercase tracking-wider">Diagnóstico Preciso</span>
        </div>

        <h2 class="text-4xl md:text-6xl lg:text-7xl font-black font-headline-lg text-slate-900 mb-8 leading-[1.1]">
          Exames Realizados no <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Domicílio</span>
        </h2>
        
        <p class="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          Coletamos as amostras com todo cuidado e enviamos para laboratórios de referência, garantindo resultados rápidos e precisos.
        </p>
      </div>

      <div class="flex justify-center mb-16">
        <Tabs 
          v-model="activeCategory" 
          :tabs="[
            { label: 'Exames de Sangue', value: 'blood', icon: 'ph:drop-fill' },
            { label: 'Outros Exames', value: 'others', icon: 'ph:test-tube-fill' },
            { label: 'Testes Rápidos', value: 'rapid', icon: 'ph:lightning-fill' }
          ]" 
        />
      </div>

      <div class="relative min-h-[400px]">
        <Transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-8"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in absolute inset-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-8"
        >
          <div :key="activeCategory" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div 
              v-for="exam in filteredExams(activeCategory)" 
              :key="exam.name"
              class="group bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-teal-100 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
            >
              <!-- Hover Background Accent -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-teal-50/50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div class="relative z-10 flex-1">
                <div class="w-16 h-16 bg-slate-50 border border-slate-100 shadow-inner rounded-2xl flex items-center justify-center mb-8 text-teal-600 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Icon :name="exam.icon" size="32" />
                </div>
                
                <h4 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">{{ exam.name }}</h4>
                <p class="text-slate-600 leading-relaxed text-base">{{ exam.description }}</p>
              </div>

              <!-- Footer Indicator -->
              <div class="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between text-slate-400 group-hover:text-teal-500 transition-colors duration-300">
                <div class="flex items-center gap-2">
                  <Icon name="ph:clock-fill" size="16" />
                  <span class="text-[10px] font-bold uppercase tracking-widest">Resultado em 24h</span>
                </div>
                <Icon name="ph:arrow-right-bold" size="14" class="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Info Callout -->
      <div v-animate-on-scroll class="mt-24 p-8 md:p-12 rounded-[3rem] bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden group">
        <!-- Decoration -->
        <div class="absolute -right-20 -top-20 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] group-hover:bg-teal-500/20 transition-colors duration-700"></div>
        <div class="absolute -left-20 -bottom-20 w-80 h-80 bg-burgundy-500/10 rounded-full blur-[100px] group-hover:bg-burgundy-500/20 transition-colors duration-700"></div>
        
        <div class="relative z-10 flex flex-col lg:flex-row items-center gap-8 md:gap-12 text-center lg:text-left">
          <div class="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            <Icon name="ph:info-fill" size="40" class="text-teal-400" />
          </div>
          <div class="flex-1">
            <h5 class="text-2xl md:text-3xl font-bold mb-3">Não encontrou o exame que procura?</h5>
            <p class="text-slate-400 text-lg leading-relaxed max-w-3xl">
              Realizamos uma vasta gama de exames especializados sob consulta. Entre em contato para verificar a disponibilidade e valores.
            </p>
          </div>
          <a 
            href="https://wa.me/5531999581716" 
            target="_blank"
            class="bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-teal-500 transition-all shadow-xl hover:shadow-teal-600/20 shrink-0 flex items-center gap-3 group/btn"
          >
            <span>Consultar Exame</span>
            <Icon name="ph:whatsapp-logo-fill" size="24" class="group-hover/btn:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import Tabs from '../../../libs/ui/components/tabs/Tabs.vue'

const activeCategory = ref('blood')

const exams = [
  { category: 'blood', name: 'Hemograma Completo', description: 'Avaliação das células vermelhas, brancas e plaquetas do sangue para diagnóstico de anemias e infecções.', icon: 'ph:activity' },
  { category: 'blood', name: 'Perfil Bioquímico', description: 'Função renal, hepática, glicemia, proteínas e eletrólitos para check-up geral da saúde interna.', icon: 'ph:chart-line-up' },
  { category: 'blood', name: 'Dosagens Hormonais', description: 'T4, Cortisol e outros exames para controle endócrino e diagnóstico de doenças hormonais.', icon: 'ph:dna' },
  
  { category: 'others', name: 'Urinálise', description: 'Avaliação física, química e sedimentoscopia da urina para detecção de problemas urinários.', icon: 'ph:flask' },
  { category: 'others', name: 'Coprológico', description: 'Pesquisa minuciosa de vermes e protozoários nas fezes para controle de parasitas.', icon: 'ph:bug' },
  { category: 'others', name: 'Citologias', description: 'Análise detalhada de pele, ouvidos e massas tumorais superficiais para diagnóstico rápido.', icon: 'ph:microscope' },
  
  { category: 'rapid', name: 'FIV / FeLV', description: 'Teste rápido e essencial para detecção de "Aids" e Leucemia felina em poucos minutos.', icon: 'ph:cat' },
  { category: 'rapid', name: '4DX (Cães)', description: 'Pesquisa simultânea de Dirofilária, Erliquia, Anaplasma e Doença de Lyme.', icon: 'ph:dog' },
  { category: 'rapid', name: 'Leishmaniose', description: 'Teste de triagem rápido para calazar em áreas endêmicas, garantindo segurança preventiva.', icon: 'ph:warning-circle' }
]

const filteredExams = (category: string) => {
  return exams.filter(e => e.category === category)
}
</script>
