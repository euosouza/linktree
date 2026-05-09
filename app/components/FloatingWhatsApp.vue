<template>
  <div>
    <!-- Botão Flutuante -->
    <button 
      @click="isOpen = true"
      class="fixed bottom-8 md:bottom-10 right-6 z-50 group flex items-center justify-center md:justify-start gap-3 bg-[#25D366] text-white w-14 h-14 md:w-auto md:h-auto md:p-3 md:pr-6 rounded-full shadow-2xl hover:bg-[#20bd59] hover:scale-105 transition-all duration-300 animate-pulse-slow"
      aria-label="Agendar via WhatsApp"
    >
      <div class="relative flex items-center justify-center">
        <Icon name="ph:whatsapp-logo-fill" size="32" class="relative z-10" />
      </div>
      <span class="hidden md:block font-bold text-sm uppercase tracking-wide">Agendar via WhatsApp</span>
    </button>

    <!-- Overlay do Modal -->
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-[60] flex items-center justify-center px-6">
        <div class="absolute inset-0 bg-tertiary/40 backdrop-blur-sm" @click="isOpen = false"></div>
        
        <!-- Conteúdo do Modal -->
        <div class="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-tertiary-container/10 p-8 md:p-10 animate-in fade-in zoom-in duration-300">
          <button @click="isOpen = false" class="absolute top-6 right-6 text-on-tertiary-fixed-variant hover:text-burgundy-800 transition-colors">
            <Icon name="ph:x-bold" size="24" />
          </button>

          <div class="flex flex-col items-center text-center mb-8">
            <div class="w-16 h-16 bg-[#E7FCE3] flex items-center justify-center rounded-2xl mb-4">
              <Icon name="ph:whatsapp-logo-fill" size="40" class="text-[#075E54]" />
            </div>
            <h3 class="text-2xl font-bold text-tertiary font-headline-md">Agendar Atendimento</h3>
            <p class="text-sm text-on-tertiary-fixed-variant mt-2">Preencha os dados abaixo para agilizarmos seu atendimento via WhatsApp.</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label class="block text-xs font-bold text-tertiary uppercase tracking-wider mb-2 ml-1">Seu Nome</label>
              <input 
                v-model="form.name" 
                type="text" 
                required 
                placeholder="Ex: Maria Silva"
                class="w-full bg-on-tertiary-container/5 border border-tertiary-container/10 rounded-2xl px-5 py-4 text-tertiary focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 transition-all"
              >
            </div>

            <div>
              <label class="block text-xs font-bold text-tertiary uppercase tracking-wider mb-2 ml-1">Nome do Pet</label>
              <input 
                v-model="form.petName" 
                type="text" 
                required 
                placeholder="Ex: Totó"
                class="w-full bg-on-tertiary-container/5 border border-tertiary-container/10 rounded-2xl px-5 py-4 text-tertiary focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 transition-all"
              >
            </div>

            <div>
              <label class="block text-xs font-bold text-tertiary uppercase tracking-wider mb-2 ml-1">Serviço de Interesse</label>
              <div class="relative">
                <select 
                  v-model="form.service" 
                  required
                  class="w-full bg-on-tertiary-container/5 border border-tertiary-container/10 rounded-2xl px-5 py-4 text-tertiary focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled selected>Selecione um serviço</option>
                  <option v-for="s in services" :key="s.slug" :value="s.name">{{ s.name }}</option>
                </select>
                <Icon name="ph:caret-down-bold" class="absolute right-5 top-1/2 -translate-y-1/2 text-tertiary/40 pointer-events-none" size="18" />
              </div>
            </div>

            <button 
              type="submit"
              class="w-full bg-burgundy-700 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-burgundy-800 hover:shadow-burgundy-800/20 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 mt-4"
            >
              Pronto, chamar no WhatsApp
              <Icon name="ph:arrow-right-bold" />
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const isOpen = ref(false)
const { services } = useServices()

const form = reactive({
  name: '',
  petName: '',
  service: ''
})

const handleSubmit = () => {
  let message = `Olá, Dra. Kelly! Meu nome é ${form.name}. Gostaria de agendar um atendimento de ${form.service} para o meu pet ${form.petName}.`
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/5531999581716?text=${encodedMessage}`
  
  window.open(whatsappUrl, '_blank')
  isOpen.value = false
}
</script>


<style scoped>
.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 1; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
