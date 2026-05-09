<template>
  <div class="bg-on-tertiary-container/5 min-h-screen pt-32 pb-20">
    <div class="main-container mx-auto px-6">
      
      <!-- Cabecalho da Pagina -->
      <header class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-tertiary font-headline-md mb-6">Central de Ajuda</h1>
        <p class="text-on-tertiary-fixed-variant text-lg leading-relaxed">
          Tire suas duvidas sobre o atendimento domiciliar, procedimentos e formas de pagamento da Dra. Kelly Fortes.
        </p>
        
        <!-- Barra de Busca -->
        <div class="mt-10 relative max-w-xl mx-auto">
          <Icon name="ph:magnifying-glass-bold" class="absolute left-5 top-1/2 -translate-y-1/2 text-tertiary/40" size="20" />
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="O que voce esta procurando?"
            class="w-full bg-white border border-tertiary-container/10 rounded-2xl py-5 pl-14 pr-6 text-tertiary shadow-xl shadow-tertiary/5 focus:outline-none focus:ring-2 focus:ring-burgundy-500/50 transition-all"
          >
        </div>
      </header>

      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Navegacao Lateral (Sidebar) -->
        <aside class="lg:w-1/4">
          <div class="sticky top-32 space-y-2">
            <button 
              @click="selectedCategory = 'all'"
              :class="selectedCategory === 'all' ? 'bg-burgundy-800 text-white shadow-lg' : 'bg-white text-tertiary hover:bg-burgundy-50'"
              class="w-full flex items-center gap-3 p-4 rounded-2xl font-bold transition-all text-left"
            >
              <Icon name="ph:grid-four-bold" size="20" />
              Todas as Perguntas
            </button>
            
            <button 
              v-for="cat in categories" 
              :key="cat.id"
              @click="selectedCategory = cat.id"
              :class="selectedCategory === cat.id ? 'bg-burgundy-800 text-white shadow-lg' : 'bg-white text-tertiary hover:bg-burgundy-50'"
              class="w-full flex items-center gap-3 p-4 rounded-2xl font-bold transition-all text-left"
            >
              <Icon :name="cat.icon" size="20" />
              {{ cat.label }}
            </button>
          </div>
        </aside>

        <!-- Conteudo do FAQ -->
        <div class="lg:w-3/4 space-y-8">
          <div v-if="filteredFaqs.length === 0" class="bg-white p-12 rounded-[2.5rem] text-center border border-tertiary-container/10">
            <div class="w-20 h-20 bg-on-tertiary-container/5 rounded-full flex items-center justify-center mx-auto mb-6 text-tertiary/20">
              <Icon name="ph:smiley-sad-bold" size="48" />
            </div>
            <h3 class="text-xl font-bold text-tertiary mb-2">Nenhuma pergunta encontrada</h3>
            <p class="text-on-tertiary-fixed-variant">Tente usar outros termos ou selecione uma categoria diferente.</p>
          </div>

          <div v-else class="space-y-4">
            <div 
              v-for="(faq, index) in filteredFaqs" 
              :key="index"
              class="bg-white rounded-[2rem] border border-tertiary-container/5 overflow-hidden transition-all hover:border-burgundy-500/20"
            >
              <button 
                @click="toggleFaq(index)"
                class="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-burgundy-50/30 transition-colors group"
              >
                <div class="flex items-center gap-4">
                   <div class="w-10 h-10 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-800 shrink-0 group-hover:scale-110 transition-transform">
                      <span class="text-sm font-bold">{{ index + 1 }}</span>
                   </div>
                   <span class="text-lg md:text-xl font-bold text-tertiary leading-tight">{{ faq.question }}</span>
                </div>
                <Icon 
                  name="ph:caret-down-bold" 
                  class="text-tertiary/30 transition-transform duration-300" 
                  :class="{ 'rotate-180 text-burgundy-800': openIndex === index }" 
                  size="24" 
                />
              </button>
              
              <div 
                v-show="openIndex === index" 
                class="px-6 md:px-8 pb-8 md:pl-22 animate-in slide-in-from-top-4 duration-300"
              >
                <p class="text-on-tertiary-fixed-variant text-base md:text-lg leading-relaxed">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Ainda tem duvidas? -->
      <div class="mt-20 bg-burgundy-900 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-64 h-64 bg-burgundy-800 rounded-full blur-3xl opacity-30"></div>
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 font-headline-md">Ainda tem duvidas?</h2>
          <p class="text-burgundy-100/70 text-lg mb-10 max-w-2xl mx-auto">
            Não encontrou o que procurava? Fale diretamente conosco pelo WhatsApp e teremos prazer em ajudar voce e seu pet.
          </p>
          <a 
            href="https://wa.me/5531999581716" 
            target="_blank"
            class="inline-flex items-center gap-3 bg-white text-burgundy-900 font-bold px-10 py-5 rounded-2xl hover:bg-burgundy-50 hover:-translate-y-1 transition-all shadow-2xl"
          >
            <Icon name="ph:whatsapp-logo-fill" size="24" />
            Falar com a Dra. Kelly
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const { categories, faqs } = useFAQ()
const route = useRoute()

const searchQuery = ref('')
const selectedCategory = ref('all')
const openIndex = ref(null)

// Observar mudanca de categoria na URL
watch(() => route.query.category, (newCat) => {
  if (newCat && categories.some(c => c.id === newCat)) {
    selectedCategory.value = newCat
  } else if (!newCat) {
    selectedCategory.value = 'all'
  }
}, { immediate: true })

const filteredFaqs = computed(() => {
  return faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'all' || faq.category === selectedCategory.value
    
    return matchesSearch && matchesCategory
  })
})

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

useHead({
  title: 'FAQ - Central de Ajuda | Dra. Kelly Fortes',
  meta: [
    { name: 'description', content: 'Duvidas frequentes sobre atendimento veterinario domiciliar, exames, vacinas e regiao de cobertura da Dra. Kelly Fortes.' }
  ]
})
</script>
