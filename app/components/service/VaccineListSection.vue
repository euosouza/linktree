<template>
  <section class="py-16 md:py-32 relative" aria-labelledby="vaccine-list-title">
    <!-- Background Decoration Orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[8%] top-[15%] w-[40rem] h-[40rem] bg-burgundy-400/5 rounded-full blur-[140px]"></div>
      <div class="absolute -left-[8%] bottom-[5%] w-[30rem] h-[30rem] bg-teal-400/5 rounded-full blur-[120px]"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-50/60 via-transparent to-transparent"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">

      <!-- Section Header -->
      <div v-animate-on-scroll class="text-center max-w-4xl mx-auto mb-16 md:mb-24 flex flex-col items-center">

        <!-- Premium Badge -->
        <div class="inline-flex items-center gap-2 text-burgundy-800 font-bold bg-burgundy-50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-burgundy-100">
          <Icon name="ph:shield-check-fill" size="18" aria-hidden="true" />
          <span class="text-xs sm:text-sm uppercase tracking-widest">Proteção Máxima</span>
        </div>

        <h2
          id="vaccine-list-title"
          class="text-4xl md:text-6xl lg:text-7xl font-black font-headline-lg text-tertiary mb-8 leading-tight"
        >
          Vacinas de
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-burgundy-700 to-burgundy-900">
            Qualidade Mundial
          </span>
        </h2>

        <p class="text-lg md:text-xl text-on-tertiary-fixed-variant max-w-2xl leading-relaxed">
          Trabalhamos apenas com as melhores marcas do mercado — <strong class="text-slate-700">Zoetis, MSD, Virbac</strong> — para garantir a máxima proteção do seu pet.
        </p>
      </div>

      <!-- Tabs -->
      <Tabs
        v-model="activeCategory"
        :tabs="[
          { label: 'Protocolo Cães', value: 'dogs', icon: 'ph:dog-fill' },
          { label: 'Protocolo Gatos', value: 'cats', icon: 'ph:cat-fill' }
        ]"
      />

      <!-- Vaccine Cards Grid -->
      <div class="relative mt-10 md:mt-14 min-h-[400px]">
        <Transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-8"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in absolute inset-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-8"
        >
          <div
            :key="activeCategory"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            <article
              v-for="(vaccine, index) in activeVaccines"
              :key="vaccine.name"
              class="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
              :aria-label="`Vacina: ${vaccine.name}`"
            >
              <!-- Hover Glow -->
              <div
                class="absolute top-0 right-0 w-40 h-40 bg-burgundy-100/40 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              ></div>

              <!-- Icon Cell -->
              <div
                class="relative z-10 w-16 h-16 bg-burgundy-50 border border-burgundy-100 rounded-2xl flex items-center justify-center mb-8 text-burgundy-700 group-hover:bg-burgundy-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm shrink-0"
                aria-hidden="true"
              >
                <Icon name="ph:shield-plus-fill" size="32" />
              </div>

              <!-- Body -->
              <div class="relative z-10 flex-1">
                <h3 class="text-xl md:text-2xl font-bold text-tertiary mb-4 group-hover:text-burgundy-800 transition-colors duration-300 leading-tight">
                  {{ vaccine.name }}
                </h3>
                <p class="text-on-tertiary-fixed-variant leading-relaxed text-base">
                  {{ vaccine.desc }}
                </p>
              </div>

              <!-- Footer Decoration -->
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-burgundy-200 group-hover:text-burgundy-500 transition-colors duration-300">
                <span class="text-[10px] font-bold uppercase tracking-widest">Proteção Ativa</span>
                <Icon name="ph:check-circle-fill" size="18" aria-hidden="true" />
              </div>
            </article>
          </div>
        </Transition>
      </div>

      <!-- Trust Strip -->
      <div v-animate-on-scroll="'300ms'" class="mt-16 md:mt-24 pt-10 border-t border-slate-100 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
        <div
          v-for="brand in brands"
          :key="brand.name"
          class="group flex items-center gap-3 bg-white/70 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-burgundy-100 transition-all duration-300"
        >
          <Icon :name="brand.icon" size="22" class="text-burgundy-600 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
          <span class="text-sm font-bold text-slate-700">{{ brand.name }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import Tabs from '../../../libs/ui/components/tabs/Tabs.vue'

interface Vaccine {
  name: string
  desc: string
}

interface Brand {
  name: string
  icon: string
}

const activeCategory = ref<'dogs' | 'cats'>('dogs')

const dogVaccines: Vaccine[] = [
  {
    name: 'V10 / V8 Importada',
    desc: 'Protege contra Cinomose, Parvovirose, Leptospirose e outras 7 doenças virais e bacterianas graves.',
  },
  {
    name: 'Antirrábica',
    desc: 'Prevenção da Raiva, zoonose grave transmitida por mordidas, obrigatória por lei para todos os cães.',
  },
  {
    name: 'Gripe Canina',
    desc: 'Proteção essencial contra a Tosse dos Canis e Bordetella, ideal para cães que passeiam ou frequentam creches.',
  },
  {
    name: 'Giárdia',
    desc: 'Prevenção de distúrbios gastrointestinais causados pelo protozoário, protegendo também a saúde da família.',
  },
]

const catVaccines: Vaccine[] = [
  {
    name: 'V4 / V5 Importada',
    desc: 'Panleucopenia, Rinotraqueíte, Calicivirose, Clamidiose e FeLV. A máxima proteção para a saúde do seu gato.',
  },
  {
    name: 'Antirrábica',
    desc: 'Proteção vital contra a Raiva para felinos, essencial mesmo para animais que não saem de casa.',
  },
]

const activeVaccines = computed<Vaccine[]>(() =>
  activeCategory.value === 'dogs' ? dogVaccines : catVaccines
)

const brands: Brand[] = [
  { name: 'Zoetis', icon: 'ph:certificate-fill' },
  { name: 'MSD Animal Health', icon: 'ph:first-aid-kit-fill' },
  { name: 'Virbac', icon: 'ph:medal-fill' },
]
</script>
