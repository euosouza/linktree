<template>
  <div class="bg-white min-h-screen relative">
    <!-- Background Decorations (GEMINI.md 11.2) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[10%] w-[35rem] h-[35rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -left-[10%] bottom-[10%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 pt-8 pb-32 relative z-10">
      <!-- Top Navigation & Breadcrumbs -->
      <div class="mb-12">
        <Breadcrumbs :items="[
          { name: 'Início', item: '/' },
          { name: 'Central de Dúvidas', item: '/faq' }
        ]" />
      </div>

      <!-- Page Header (GEMINI.md 11.3) -->
      <header v-animate-on-scroll class="max-w-4xl mx-auto text-center mb-12 md:mb-20 flex flex-col items-center">
        <div class="inline-flex items-center gap-2 bg-burgundy-50 text-burgundy-800 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm border border-burgundy-100">
          <Icon name="ph:info-fill" size="16" aria-hidden="true" />
          <span class="tracking-widest">Suporte & Informação</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-tertiary font-headline-lg mb-6 leading-tight">
          Central de <span class="text-burgundy-700">Dúvidas</span>
        </h1>
        <p class="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Tire suas dúvidas sobre o atendimento domiciliar, procedimentos e cuidados especializados da Dra. Kelly Fortes.
        </p>
        
        <!-- Premium Search Bar -->
        <div class="mt-8 relative w-full max-w-xl mx-auto group">
          <div class="absolute inset-0 bg-burgundy-800/5 rounded-[1.5rem] blur-2xl group-focus-within:bg-burgundy-800/10 transition-colors -z-10"></div>
          <Icon name="ph:magnifying-glass-bold" class="absolute left-5 top-1/2 -translate-y-1/2 text-burgundy-800/30 group-focus-within:text-burgundy-800 transition-colors" size="20" />
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="O que você está procurando?"
            class="w-full bg-white/80 backdrop-blur-md border border-slate-100 rounded-[1.25rem] py-4 pl-14 pr-6 text-tertiary text-base shadow-sm focus:outline-none focus:ring-4 focus:ring-burgundy-500/10 focus:border-burgundy-200 transition-all placeholder:text-slate-300"
          >
        </div>
      </header>

      <!-- Main Layout (GEMINI.md 11.5 Sticky Pattern) -->
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <!-- Sidebar Navigation (Sticky Column) -->
        <aside class="lg:w-1/3 w-full">
          <!-- 1. Envoltório do fixo: Lida com a posição na tela -->
          <div class="lg:sticky lg:top-32">
            <!-- 2. Envoltório da animação: Executa entrada visual -->
            <div v-animate-on-scroll="'200ms'" class="relative md:pl-10">
              
              <!-- Vertical Progress Decor -->
              <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-50 rounded-full overflow-hidden">
                 <div 
                   class="w-full bg-burgundy-700 transition-all duration-500 rounded-full" 
                   :style="{ height: scrollProgress + '%' }"
                 ></div>
              </div>

              <h3 class="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold px-4 mb-8">Navegação</h3>
              
              <div class="flex flex-col gap-4">
                <button 
                  @click="scrollToCategory('all')"
                  class="w-full flex items-center gap-3 p-4 rounded-[1.5rem] transition-all duration-500 text-left border group relative overflow-hidden"
                  :class="selectedCategory === 'all' 
                    ? 'bg-teal-800 text-white border-teal-800 shadow-lg shadow-teal-100' 
                    : 'bg-white text-tertiary border-slate-100 hover:border-teal-100 hover:bg-teal-50/30'"
                >
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500"
                    :class="selectedCategory === 'all' ? 'bg-white/20' : 'bg-teal-50 text-teal-700 group-hover:bg-white'">
                    <Icon name="ph:grid-four-duotone" size="20" />
                  </div>
                  <div>
                    <p class="font-bold text-sm">Todas as Dúvidas</p>
                    <p class="text-[10px] opacity-70">Geral e recomendações</p>
                  </div>
                </button>
                
                <!-- Category Tabs -->
                <button 
                  v-for="cat in categories" 
                  :key="cat.id"
                  @click="scrollToCategory(cat.id)"
                  class="w-full flex items-center gap-3 p-4 rounded-[1.5rem] transition-all duration-500 text-left border group relative overflow-hidden"
                  :class="selectedCategory === cat.id 
                    ? 'bg-teal-800 text-white border-teal-800 shadow-lg shadow-teal-100' 
                    : 'bg-white text-tertiary border-slate-100 hover:border-teal-100 hover:bg-teal-50/30'"
                >
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500"
                    :class="selectedCategory === cat.id ? 'bg-white/20' : 'bg-teal-50 text-teal-700 group-hover:bg-white'">
                    <Icon :name="cat.icon" size="20" />
                  </div>
                  <div class="flex-1">
                    <p class="font-bold text-sm">{{ cat.label }}</p>
                    <p class="text-[10px] opacity-70 line-clamp-1">{{ cat.description }}</p>
                  </div>
                </button>
              </div>

              <!-- Help Callout (Small Card) -->
              <div class="mt-12 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden group">
                 <Icon name="ph:chats-teardrop-duotone" size="64" class="absolute -right-4 -bottom-4 text-slate-200/50 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                 <p class="text-sm font-bold text-tertiary mb-3 relative z-10">Não encontrou sua dúvida?</p>
                 <a href="https://wa.me/5531999581716" target="_blank" class="text-burgundy-800 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all relative z-10">
                    Fale conosco
                    <Icon name="ph:arrow-right-bold" />
                 </a>
              </div>
            </div>
          </div>
        </aside>

        <!-- FAQ Content Area (GEMINI.md 11.7 Rows Style) -->
        <div id="faq-content" class="lg:w-2/3 space-y-24">
          <div v-if="filteredFaqs.length === 0" class="bg-slate-50/30 p-16 rounded-[3rem] text-center border-2 border-dashed border-slate-100">
            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
              <Icon name="ph:magnifying-glass-duotone" size="40" class="text-slate-200" />
            </div>
            <h3 class="text-2xl font-bold text-tertiary mb-3">Nenhum resultado encontrado</h3>
            <p class="text-slate-400 max-w-sm mx-auto">Tente usar outros termos ou limpe o filtro de busca.</p>
          </div>

          <div v-else class="space-y-24">
             <div 
               v-for="catGroup in categorizedFaqs" 
               :key="catGroup.id"
               :id="`faq-cat-${catGroup.id}`"
               class="scroll-mt-40"
             >
                <!-- Category Section Header -->
                <div class="flex items-center gap-6 mb-12">
                   <div class="w-12 h-12 bg-burgundy-50 rounded-2xl flex items-center justify-center text-burgundy-800 shadow-inner">
                      <Icon :name="catGroup.icon" size="24" aria-hidden="true" />
                   </div>
                   <h2 class="text-2xl md:text-3xl font-bold text-tertiary font-headline-md tracking-tight">{{ catGroup.label }}</h2>
                   <div class="h-px bg-slate-100 flex-1"></div>
                </div>

                <div class="space-y-6">
                  <div 
                    v-for="(faq, index) in catGroup.items" 
                    :key="`${catGroup.id}-${index}`"
                    v-animate-on-scroll="`${50 * (index % 10)}ms`"
                    class="bg-white rounded-[1.5rem] border border-slate-100 transition-all duration-500 overflow-hidden group"
                    :class="openIndex === `${catGroup.id}-${index}` ? 'shadow-xl shadow-slate-100 border-teal-100 ring-1 ring-teal-50' : 'hover:border-teal-100 hover:shadow-lg hover:shadow-slate-50 hover:-translate-y-1'"
                  >
                    <button 
                      @click="toggleFaq(`${catGroup.id}-${index}`)"
                      class="w-full flex items-center justify-between p-5 md:p-7 text-left transition-colors relative"
                    >
                      <div class="flex items-center gap-4 md:gap-6 flex-1">
                         <div class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0 transition-all duration-500 group-hover:bg-teal-800 group-hover:text-white"
                              :class="{ 'bg-burgundy-800 text-white scale-110 rotate-3': openIndex === `${catGroup.id}-${index}` }">
                            <span class="text-xs font-black">{{ index + 1 }}</span>
                         </div>
                         <h4 class="text-base md:text-xl font-bold text-tertiary leading-tight group-hover:text-burgundy-900 transition-colors">
                           {{ faq.question }}
                         </h4>
                      </div>
                      <div class="ml-4 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 transition-all duration-500"
                           :class="{ 'rotate-180 bg-burgundy-50 text-burgundy-800': openIndex === `${catGroup.id}-${index}` }">
                        <Icon name="ph:caret-down-bold" size="20" />
                      </div>
                    </button>
                    
                    <!-- Accordion Content (CSS Grid technique for perfect auto-height) -->
                    <div 
                      class="grid transition-all duration-500 ease-in-out"
                      :class="openIndex === `${catGroup.id}-${index}` ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                    >
                      <div class="overflow-hidden">
                        <div class="px-5 md:px-7 md:pl-20 pb-8">
                          <div class="w-full h-px bg-slate-50 mb-6"></div>
                          <p class="text-slate-500 text-sm md:text-base leading-relaxed">
                            {{ faq.answer }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <!-- Still Have Questions? Section (GEMINI.md 11.9 Premium Card) -->
      <div v-animate-on-scroll class="mt-32 relative group">
        <!-- Decoration behind card -->
        <div class="absolute inset-0 bg-burgundy-900 rounded-[4rem] -rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
        
        <!-- Main Card -->
        <div class="relative bg-burgundy-800 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 text-center overflow-hidden shadow-2xl border border-white/10">
          <!-- Internal Orbs & Patterns -->
          <div class="absolute -top-20 -right-20 w-[25rem] h-[25rem] bg-white/5 rounded-full blur-[100px] group-hover:bg-white/10 transition-colors duration-700"></div>
          <div class="absolute -bottom-20 -left-20 w-[25rem] h-[25rem] bg-teal-400/5 rounded-full blur-[100px]"></div>
          
          <!-- Secondary Decorative Elements (Floating Icons) -->
          <div class="absolute top-12 left-12 opacity-[0.03] rotate-12 pointer-events-none ">
            <Icon name="ph:dog-fill" size="160" class="text-white" />
          </div>
          <div class="absolute bottom-8 right-12 opacity-[0.03] -rotate-12 pointer-events-none ">
            <Icon name="ph:cat-fill" size="140" class="text-white" />
          </div>
          <div class="absolute top-1/2 left-1/4 opacity-[0.02] pointer-events-none">
            <Icon name="ph:heart-fill" size="40" class="text-white" />
          </div>

          <div class="relative z-10 max-w-2xl mx-auto">
            <!-- Icon Cell -->
            <div class="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
               <Icon name="ph:chats-teardrop-duotone" size="32" class="text-white" aria-hidden="true" />
            </div>
            
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 font-headline-lg leading-tight">
              Dúvidas <span class="bg-gradient-to-br from-teal-200 to-teal-400 bg-clip-text text-transparent">específicas?</span>
            </h2>
            
            <p class="text-burgundy-100/70 text-base md:text-lg mb-10 leading-relaxed">
              Cada pet é único. Se você não encontrou a resposta ideal aqui, fale diretamente com a Dra. Kelly para um esclarecimento personalizado.
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5531999581716" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-3 bg-white text-burgundy-900 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 hover:-translate-y-1 transition-all shadow-xl group/btn"
              >
                <Icon name="ph:whatsapp-logo-fill" size="20" class="group-hover/btn:rotate-12 transition-transform" />
                Agendar Agora
              </a>
              <a 
                href="https://instagram.com/kellyfortes.vet" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-3 bg-burgundy-700/50 text-white font-bold px-8 py-4 rounded-xl hover:bg-burgundy-700 border border-white/10 transition-all"
              >
                <Icon name="ph:instagram-logo-fill" size="20" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '../../libs/ui/components/breadcrumbs/Breadcrumbs.vue'

const { categories, faqs } = useFAQ()
const route = useRoute()

const searchQuery = ref('')
const selectedCategory = ref('all')
const openIndex = ref<string | null>(null)
const scrollProgress = ref(0)

// Organizar FAQs por categoria para Scrollspy (GEMINI.md 11.5)
const categorizedFaqs = computed(() => {
  const filtered = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesSearch
  })

  return categories.map(cat => ({
    ...cat,
    items: filtered.filter(f => f.category === cat.id)
  })).filter(group => group.items.length > 0)
})

const filteredFaqs = computed(() => {
  return faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'all' || faq.category === selectedCategory.value
    
    return matchesSearch && matchesCategory
  })
})

const toggleFaq = (index: string) => {
  openIndex.value = openIndex.value === index ? null : index
}

const scrollToCategory = (catId: string) => {
  selectedCategory.value = catId
  if (catId === 'all') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const el = document.getElementById(`faq-cat-${catId}`)
    if (el) {
      const offset = 140 // Espaço para o header sticky
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }
}

// Scrollspy & Progress Indicator Logic
onMounted(() => {
  // Intersection Observer para atualizar a categoria ativa conforme o scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Usamos um threshold pequeno e margens para detectar a seção principal no topo
      if (entry.isIntersecting) {
        const id = entry.target.id.replace('faq-cat-', '')
        selectedCategory.value = id
      }
    })
  }, { 
    threshold: 0.1, 
    rootMargin: '-150px 0px -50% 0px' 
  })

  // Observar cada grupo de categoria
  document.querySelectorAll('[id^="faq-cat-"]').forEach(el => observer.observe(el))

  // Calcular progresso do scroll no container de FAQ para a barra vertical
  window.addEventListener('scroll', () => {
    const container = document.getElementById('faq-content')
    if (container) {
      const rect = container.getBoundingClientRect()
      const winHeight = window.innerHeight
      const totalHeight = rect.height
      // Calcula o quanto o container já "passou" pelo topo da tela
      const progress = Math.max(0, Math.min(100, ((rect.top * -1) / (totalHeight - winHeight / 2)) * 100))
      scrollProgress.value = progress
    }
  })
})

// Sincronizar com parâmetros de query na URL
watch(() => route.query.category, (newCat) => {
  const catId = Array.isArray(newCat) ? newCat[0] : newCat
  if (catId && categories.some(c => c.id === catId)) {
    setTimeout(() => scrollToCategory(catId as string), 150)
  }
}, { immediate: true })

useHead({
  title: 'Central de Dúvidas | Dra. Kelly Fortes',
  meta: [
    { name: 'description', content: 'Tire suas dúvidas sobre atendimento veterinário domiciliar, vacinação, exames e cuidados preventivos com a Dra. Kelly Fortes.' }
  ]
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Garante que o scroll pare no lugar certo */
.scroll-mt-40 {
  scroll-margin-top: 10rem;
}
</style>
