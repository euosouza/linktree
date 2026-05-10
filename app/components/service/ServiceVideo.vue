<template>
  <section v-if="videoUrl" class="py-12 md:py-32 bg-white relative" aria-labelledby="video-title">
    
    <!-- Premium Background Decors (Asymmetrical Orbs) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[15%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -left-[10%] bottom-[5%] w-[25rem] h-[25rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Asymmetrical Layout (Lg: 1/2 - 1/2) -->
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <!-- Left Side: Content Storytelling -->
        <div class="lg:w-1/2 relative">
          <div v-animate-on-scroll class="flex flex-col items-start">
            <!-- Premium Badge -->
            <div class="inline-flex items-center gap-2 text-teal-800 font-bold bg-teal-50/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-teal-100 shadow-sm">
              <Icon name="ph:play-circle-fill" size="18" aria-hidden="true" class="text-teal-600" />
              <span class="text-xs sm:text-sm uppercase tracking-widest font-black">Experiência Imersiva</span>
            </div>

            <h2 id="video-title" class="text-3xl md:text-5xl lg:text-6xl font-black font-headline-lg text-slate-900 mb-8 leading-tight tracking-tight">
              Entenda o <span class="text-teal-600">Procedimento</span> em Detalhes
            </h2>
            
            <p class="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
              Preparamos um material exclusivo para que você acompanhe cada etapa do nosso atendimento e sinta a segurança do cuidado especializado no conforto do seu lar.
            </p>

            <!-- Highlights List (Visual Content for Creativity) -->
            <div class="space-y-6 md:space-y-8 w-full max-w-xl">
              <div 
                v-for="(point, idx) in procedurePoints" 
                :key="idx"
                v-animate-on-scroll="`${idx * 150}ms`"
                class="group flex gap-5 items-start"
              >
                <div class="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-teal-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-teal-600">
                  <Icon :name="point.icon" size="24" aria-hidden="true" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors duration-300">
                    {{ point.title }}
                  </h3>
                  <p class="text-slate-500 text-base leading-relaxed">
                    {{ point.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Sticky Video Experience -->
        <div class="lg:w-1/2 w-full">
          <div class="lg:sticky lg:top-32">
            <div v-animate-on-scroll="'300ms'" class="relative group perspective-1000">
              
              <!-- Decorative Shadow Card (Rotated for depth) -->
              <div class="absolute inset-0 bg-teal-600/5 rounded-[3rem] -rotate-2 scale-[1.03] group-hover:rotate-[-4deg] transition-transform duration-700" aria-hidden="true"></div>
              
              <!-- Video Frame Glassmorphism -->
              <div class="relative bg-white/40 backdrop-blur-xl p-3 md:p-4 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/60 shadow-2xl shadow-teal-900/10 overflow-hidden">
                <div class="aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 relative z-10 shadow-inner group-hover:shadow-2xl transition-shadow duration-500">
                  <iframe 
                    class="w-full h-full object-cover"
                    :src="videoUrl || ''" 
                    title="Vídeo explicativo do procedimento" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                  ></iframe>
                </div>

                <!-- Subtle Glow Overlay -->
                <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>

              <!-- Floating Interaction Prompt (Desktop Only) -->
              <div class="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-3 animate-bounce-subtle z-20 hidden md:flex">
                <div class="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                  <Icon name="ph:info-fill" size="20" />
                </div>
                <p class="text-xs font-black text-slate-700 uppercase tracking-widest">Aperte o Play</p>
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
  videoUrl?: string
}>()

const procedurePoints = [
  {
    title: 'Transparência Total',
    description: 'Acompanhe cada etapa do cuidado sem mistérios, garantindo sua tranquilidade.',
    icon: 'ph:eye-fill'
  },
  {
    title: 'Equipamentos de Ponta',
    description: 'Veja a tecnologia que levamos até sua casa para o melhor diagnóstico.',
    icon: 'ph:microscope-fill'
  },
  {
    title: 'Acolhimento Humanizado',
    description: 'O foco é no bem-estar do seu pet, respeitando o tempo e o espaço dele.',
    icon: 'ph:heart-fill'
  }
]
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-bounce-subtle {
  animation: bounce-subtle 3s infinite ease-in-out;
}
</style>
