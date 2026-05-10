<template>
  <section class="py-16 md:py-32 bg-white relative" aria-labelledby="vaccine-table-title">
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -left-[10%] top-[20%] w-[25rem] h-[25rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -right-[10%] bottom-[10%] w-[20rem] h-[20rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">

      <!-- Section Header -->
      <div v-animate-on-scroll class="text-center max-w-4xl mx-auto mb-16 md:mb-24 flex flex-col items-center">

        <!-- Premium Badge -->
        <div class="inline-flex items-center gap-2 text-burgundy-800 font-bold bg-burgundy-50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-burgundy-100">
          <Icon name="ph:calendar-check-fill" size="18" aria-hidden="true" />
          <span class="text-xs sm:text-sm uppercase tracking-widest">Protocolo Veterinário</span>
        </div>

        <h2
          id="vaccine-table-title"
          class="text-3xl md:text-5xl font-bold font-headline-lg text-tertiary mb-10 leading-tight"
        >
          Calendário de <span class="text-burgundy-700">Vacinação Sugerido</span>
        </h2>

        <p class="text-lg md:text-xl text-on-tertiary-fixed-variant max-w-2xl leading-relaxed">
          Mantenha a proteção do seu pet em dia. Confira as principais vacinas e quando aplicá-las.
        </p>
      </div>

      <!-- Tabs -->
      <Tabs
        v-model="activeCategory"
        :tabs="[
          { label: 'Cães', value: 'dogs', icon: 'ph:dog-fill' },
          { label: 'Gatos', value: 'cats', icon: 'ph:cat-fill' }
        ]"
      >
        <template #default="{ activeTab }">
          <!-- Vaccine Schedule Content -->
          <div class="relative mt-10 md:mt-14 min-h-[300px]">
            <Transition
              enter-active-class="transition duration-500 ease-out"
              enter-from-class="opacity-0 translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-300 ease-in absolute inset-0"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-8"
            >
              <div :key="activeTab" class="max-w-4xl mx-auto">
                <!-- Table Header -->
                <div class="flex items-center gap-4 mb-8">
                  <div class="w-14 h-14 bg-burgundy-50 border border-burgundy-100 rounded-2xl flex items-center justify-center shadow-sm">
                    <Icon :name="activeTab === 'dogs' ? 'ph:dog-fill' : 'ph:cat-fill'" size="28" class="text-burgundy-700" />
                  </div>
                  <div>
                    <h3 class="font-bold text-tertiary text-xl">
                      {{ activeTab === 'dogs' ? 'Para Cães' : 'Para Gatos' }}
                    </h3>
                    <p class="text-sm text-on-tertiary-fixed-variant">
                      {{ activeTab === 'dogs' ? '4 vacinas recomendadas' : '3 vacinas recomendadas' }}
                    </p>
                  </div>
                </div>

                <!-- Vaccine Rows -->
                <div class="space-y-4">
                  <div
                    v-for="(v, i) in filteredVaccines(activeTab)"
                    :key="v.name"
                    class="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-burgundy-100 hover:-translate-y-0.5 transition-all duration-300 gap-4 relative overflow-hidden"
                  >
                    <!-- Hover Glow -->
                    <div
                      class="absolute top-0 right-0 w-24 h-24 bg-burgundy-50/50 rounded-full blur-2xl -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      aria-hidden="true"
                    ></div>

                    <!-- Left: Number + Info -->
                    <div class="flex items-center gap-5 relative z-10">
                      <div class="w-10 h-10 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 group-hover:bg-burgundy-700 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <span class="text-sm font-black text-burgundy-700 group-hover:text-white transition-colors duration-300">{{ String(i + 1).padStart(2, '0') }}</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="font-bold text-tertiary text-lg group-hover:text-burgundy-800 transition-colors duration-300">{{ v.name }}</span>
                        <span class="text-sm text-on-tertiary-fixed-variant leading-relaxed">{{ v.description }}</span>
                      </div>
                    </div>

                    <!-- Right: Age Badge -->
                    <div class="relative z-10 flex items-center gap-2 text-sm font-bold text-burgundy-800 bg-burgundy-50 px-5 py-2 rounded-full self-start sm:self-center border border-burgundy-100/50 shrink-0">
                      <Icon name="ph:clock-fill" size="14" class="text-burgundy-600" aria-hidden="true" />
                      {{ v.age }}
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </template>
      </Tabs>

      <!-- Info Callout -->
      <div v-animate-on-scroll="'300ms'" class="mt-16 md:mt-24 p-8 md:p-10 rounded-[2.5rem] bg-burgundy-50/50 border border-burgundy-100 backdrop-blur-sm relative overflow-hidden group">
        <!-- Callout Decoration -->
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-burgundy-200/20 rounded-full blur-3xl group-hover:bg-burgundy-200/40 transition-colors duration-500" aria-hidden="true"></div>

        <div class="relative z-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div class="w-14 h-14 bg-burgundy-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            <Icon name="ph:info-fill" size="28" class="text-burgundy-700" />
          </div>
          <p class="text-lg text-on-tertiary-fixed-variant leading-relaxed">
            Protocolos variam conforme o estilo de vida do pet. A <strong class="text-tertiary">Dra. Kelly</strong> avaliará a melhor estratégia para o seu melhor amigo.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import Tabs from '../../../libs/ui/components/tabs/Tabs.vue'

interface VaccineSchedule {
  name: string
  description: string
  age: string
}

const activeCategory = ref<'dogs' | 'cats'>('dogs')

const dogVaccines: VaccineSchedule[] = [
  { name: 'V8 ou V10 (Polivalente)', description: 'Protege contra Cinomose, Parvovirose, etc.', age: '6, 9 e 12 semanas' },
  { name: 'Antirrábica', description: 'Protege contra a Raiva (obrigatória).', age: '4 meses' },
  { name: 'Gripe Canina', description: 'Prevenção de tosse dos canis.', age: 'A partir de 8 semanas' },
  { name: 'Giárdia', description: 'Proteção contra protozoário intestinal.', age: 'A partir de 8 semanas' },
]

const catVaccines: VaccineSchedule[] = [
  { name: 'V4 ou V5 (Polivalente)', description: 'Panleucopenia, Calicivirose, Rinotraqueíte, etc.', age: '8 e 12 semanas' },
  { name: 'Antirrábica', description: 'Protege contra a Raiva.', age: '4 meses' },
  { name: 'FeLV (Opcional)', description: 'Leucemia Felina (inclusa na V5).', age: 'Conforme teste prévio' },
]

function filteredVaccines(category: string): VaccineSchedule[] {
  return category === 'dogs' ? dogVaccines : catVaccines
}
</script>
