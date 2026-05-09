<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="main-container mx-auto px-6 md:px-12">
      <div v-animate-on-scroll class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl md:text-4xl font-bold font-headline-md text-tertiary mb-6">
          Calendário de Vacinação Sugerido
        </h2>
        <p class="text-lg text-on-tertiary-fixed-variant">
          Mantenha a proteção do seu pet em dia. Confira as principais vacinas e quando aplicá-las.
        </p>
      </div>

      <Tabs 
        v-model="activeCategory" 
        :tabs="[
          { label: 'Cães', value: 'dogs', icon: 'ph:dog-fill' },
          { label: 'Gatos', value: 'cats', icon: 'ph:cat-fill' }
        ]" 
      >
        <template #default="{ activeTab }">
          <!-- Dogs Table -->
          <div v-if="activeTab === 'dogs'" v-animate-on-scroll="'100ms'" class="bg-tertiary/5 rounded-[2.5rem] p-8 md:p-12 border border-tertiary-container/10 max-w-4xl mx-auto">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-12 h-12 bg-burgundy-700 rounded-2xl flex items-center justify-center text-white">
                <Icon name="ph:dog-fill" size="28" />
              </div>
              <h3 class="text-2xl font-bold text-tertiary">Para Cães</h3>
            </div>
            
            <div class="space-y-4">
              <div v-for="(v, i) in dogVaccines" :key="i" class="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-tertiary-container/10 gap-4">
                <div class="flex flex-col">
                  <span class="font-bold text-tertiary text-lg">{{ v.name }}</span>
                  <span class="text-sm text-on-tertiary-fixed-variant">{{ v.description }}</span>
                </div>
                <span class="text-sm font-bold text-burgundy-800 bg-burgundy-50 px-4 py-1.5 rounded-full self-start sm:self-center">{{ v.age }}</span>
              </div>
            </div>
          </div>

          <!-- Cats Table -->
          <div v-if="activeTab === 'cats'" v-animate-on-scroll="'200ms'" class="bg-tertiary/5 rounded-[2.5rem] p-8 md:p-12 border border-tertiary-container/10 max-w-4xl mx-auto">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-12 h-12 bg-burgundy-700 rounded-2xl flex items-center justify-center text-white">
                <Icon name="ph:cat-fill" size="28" />
              </div>
              <h3 class="text-2xl font-bold text-tertiary">Para Gatos</h3>
            </div>
            
            <div class="space-y-4">
              <div v-for="(v, i) in catVaccines" :key="i" class="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-tertiary-container/10 gap-4">
                <div class="flex flex-col">
                  <span class="font-bold text-tertiary text-lg">{{ v.name }}</span>
                  <span class="text-sm text-on-tertiary-fixed-variant">{{ v.description }}</span>
                </div>
                <span class="text-sm font-bold text-burgundy-800 bg-burgundy-50 px-4 py-1.5 rounded-full self-start sm:self-center">{{ v.age }}</span>
              </div>
            </div>
          </div>
        </template>
      </Tabs>
      
      <div v-animate-on-scroll="'300ms'" class="mt-16 p-8 rounded-3xl bg-burgundy-50 text-burgundy-900 text-center border border-burgundy-100">
        <p class="text-lg font-medium">
          <Icon name="ph:info-fill" class="inline mr-2 text-burgundy-600" />
          Protocolos variam conforme o estilo de vida do pet. A Dra. Kelly avaliará a melhor estratégia para o seu melhor amigo.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Tabs from '../../../libs/ui/components/tabs/Tabs.vue'

const activeCategory = ref('dogs')

const dogVaccines = [
  { name: 'V8 ou V10 (Polivalente)', description: 'Protege contra Cinomose, Parvovirose, etc.', age: '6, 9 e 12 semanas' },
  { name: 'Antirrábica', description: 'Protege contra a Raiva (obrigatória).', age: '4 meses' },
  { name: 'Gripe Canina', description: 'Prevenção de tosse dos canis.', age: 'A partir de 8 semanas' },
  { name: 'Giárdia', description: 'Proteção contra protozoário intestinal.', age: 'A partir de 8 semanas' }
]

const catVaccines = [
  { name: 'V4 ou V5 (Polivalente)', description: 'Panleucopenia, Calicivirose, Rinotraqueíte, etc.', age: '8 e 12 semanas' },
  { name: 'Antirrábica', description: 'Protege contra a Raiva.', age: '4 meses' },
  { name: 'FeLV (Opcional)', description: 'Leucemia Felina (inclusa na V5).', age: 'Conforme teste prévio' }
]
</script>
