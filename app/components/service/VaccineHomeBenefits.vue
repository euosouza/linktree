<template>
  <section class="py-16 md:py-32 bg-white">
    <div class="main-container mx-auto px-6 md:px-12">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div v-animate-on-scroll class="lg:w-1/2 relative">
          <div class="absolute -top-10 -left-10 w-32 h-32 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
          <div class="relative z-10 inline-flex items-center gap-2 text-teal-700 font-bold bg-teal-50 px-4 py-2 rounded-full mb-8">
            <Icon name="ph:house-line-fill" />
            Vantagens da Vacinação Domiciliar
          </div>
          <h2 class="text-3xl md:text-5xl font-bold font-headline-lg text-tertiary mb-10 leading-tight">
            Menos estresse, <span class="text-teal-600">mais segurança</span> para o seu pet.
          </h2>
          
          <div class="space-y-10">
            <div v-for="(b, i) in benefits" :key="i" class="flex gap-6 group">
              <div class="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-teal-100">
                <Icon :name="b.icon" size="28" class="text-teal-700" />
              </div>
              <div>
                <h4 class="font-bold text-tertiary text-xl mb-2">{{ b.title }}</h4>
                <p class="text-on-tertiary-fixed-variant leading-relaxed">{{ b.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 w-full">
          <div class="lg:sticky lg:top-32">
            <div v-animate-on-scroll="'200ms'" class="relative">
            <div class="absolute inset-0 bg-teal-600/5 rounded-[4rem] rotate-3 scale-105"></div>
            <div class="relative bg-white p-8 md:p-12 rounded-[4rem] border border-teal-100 shadow-xl overflow-hidden">
               <div class="absolute top-0 right-0 p-8">
                 <Icon name="ph:quotes-fill" size="64" class="text-teal-500/10" />
               </div>
               <div class="flex items-center gap-4 mb-8">
                 <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                   <Icon name="ph:shield-plus-fill" size="32" class="text-teal-700" />
                 </div>
                 <h3 class="text-2xl font-bold text-tertiary">Fator Imunidade</h3>
               </div>
               <p class="text-lg text-on-tertiary-fixed-variant leading-relaxed italic mb-8">
                 "Ambientes hospitalares e clínicas podem concentrar patógenos. Vacinar em casa elimina o risco de contato com animais doentes na sala de espera, especialmente vital para filhotes em fase de imunização."
               </p>
               <div class="flex items-center gap-4 border-t border-teal-50 border-dashed pt-8">
                 <div class="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center font-bold text-burgundy-800">KF</div>
                 <div>
                   <p class="font-bold text-tertiary">Dra. Kelly Fortes</p>
                   <p class="text-sm text-on-tertiary-fixed-variant">Médica Veterinária</p>
                 </div>
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
    title: 'Zero Medo do Consultório', 
    desc: 'O pet fica calmo em seu território, evitando tremores, agressividade e o medo associado ao cheiro de clínica.',
    icon: 'ph:heart-fill'
  },
  { 
    title: 'Sem Contato com Doenças', 
    desc: 'Evite salas de espera onde animais doentes circulam, protegendo seu pet de vírus e bactérias oportunistas.',
    icon: 'ph:shield-check-fill'
  },
  { 
    title: 'Exame Pré-Vacinal Detalhado', 
    desc: 'Toda vacinação é precedida por uma avaliação física completa para garantir que o pet esteja 100% apto.',
    icon: 'ph:stethoscope-fill'
  },
  { 
    title: 'Comodidade para o Tutor', 
    desc: 'Sem trânsito, sem estresse de transporte e com horário agendado que se adapta à sua rotina.',
    icon: 'ph:car-profile-fill'
  }
]
</script>
