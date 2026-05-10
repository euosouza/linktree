<template>
  <div class="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]">
    <!-- Botão Flutuante Premium -->
    <button 
      @click="toggleChat"
      class="group relative flex items-center gap-0 hover:gap-3 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_15px_45px_rgb(37,211,102,0.5)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden"
      :class="{ 'scale-90 opacity-0 pointer-events-none': isOpen }"
      aria-label="Falar no WhatsApp"
    >
      <!-- Glossy Reflection -->
      <div class="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <!-- Label Deslizante (Desktop) -->
      <span class="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold tracking-wide transition-all duration-500 group-hover:max-w-xs">
        Fale Conosco
      </span>

      <!-- Ícone e Badge Live -->
      <div class="relative flex items-center justify-center shrink-0">
        <Icon name="ph:whatsapp-logo-fill" size="28" class="relative z-10 group-hover:rotate-12 transition-transform duration-500" />
        
        <!-- Live Indicator -->
        <span class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full z-20">
          <span class="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>
        </span>
      </div>
    </button>

    <!-- Janela de Chat Premium -->
    <Transition
      enter-active-class="transition duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      enter-from-class="opacity-0 translate-y-10 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-10 scale-95"
    >
      <div v-if="isOpen" class="absolute bottom-0 right-0 w-[calc(100vw-3rem)] sm:w-[400px] bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex flex-col">
        <!-- Chat Header -->
        <div class="bg-gradient-to-r from-burgundy-900 to-burgundy-800 p-6 text-white relative">
          <!-- Background Decor -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
          
          <div class="flex items-center gap-4 relative z-10">
            <div class="relative">
              <img 
                src="/avatar.jpeg" 
                alt="Dra. Kelly" 
                class="w-12 h-12 rounded-2xl object-cover border-2 border-white/20 shadow-lg"
              />
              <span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-burgundy-800 rounded-full"></span>
            </div>
            
            <div class="flex-1">
              <h4 class="font-bold text-lg leading-tight">Dra. Kelly</h4>
              <p class="text-xs text-white/70 flex items-center gap-1.5">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online agora
              </p>
            </div>

            <button 
              @click="isOpen = false"
              class="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Icon name="ph:x-bold" size="20" />
            </button>
          </div>
        </div>

        <!-- Chat Body -->
        <div class="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <!-- Message: Welcome -->
          <div class="flex flex-col gap-2">
            <div class="bg-slate-100 text-tertiary p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm leading-relaxed relative">
              <p>Olá! 👋 Que bom ter você aqui. Como posso ajudar você e seu pet hoje?</p>
              <span class="text-[10px] text-slate-400 mt-1 block">Agora mesmo</span>
            </div>
            
            <!-- Typing Indicator (Visual Only) -->
            <div v-if="isTyping" class="flex gap-1 bg-slate-50 w-12 p-2 rounded-full px-3">
              <div class="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
              <div class="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div class="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>

          <!-- Form integrated into chat -->
          <form @submit.prevent="handleSubmit" class="space-y-4 pt-2">
            <div class="space-y-4">
              <!-- Input Nome -->
              <div class="group">
                <label class="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1.5 block ml-1">Seu Nome</label>
                <div class="relative">
                  <input 
                    v-model="form.name" 
                    type="text" 
                    required 
                    placeholder="Como podemos te chamar?"
                    class="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-tertiary focus:outline-none focus:ring-2 focus:ring-burgundy-500/20 focus:bg-white focus:border-burgundy-100 transition-all placeholder:text-slate-300"
                  >
                  <Icon name="ph:user-bold" class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-burgundy-500 transition-colors" size="18" />
                </div>
              </div>

              <!-- Input Nome do Pet -->
              <div class="group">
                <label class="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1.5 block ml-1">Nome do Pet</label>
                <div class="relative">
                  <input 
                    v-model="form.petName" 
                    type="text" 
                    required 
                    placeholder="Qual o nome do seu amiguinho?"
                    class="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-tertiary focus:outline-none focus:ring-2 focus:ring-burgundy-500/20 focus:bg-white focus:border-burgundy-100 transition-all placeholder:text-slate-300"
                  >
                  <Icon name="ph:paw-print-bold" class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-burgundy-500 transition-colors" size="18" />
                </div>
              </div>

              <!-- Input Serviço -->
              <div class="group">
                <label class="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-1.5 block ml-1">Serviço de Interesse</label>
                <div class="relative">
                  <select 
                    v-model="form.service" 
                    required
                    class="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-tertiary focus:outline-none focus:ring-2 focus:ring-burgundy-500/20 focus:bg-white focus:border-burgundy-100 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Selecione um serviço</option>
                    <option v-for="s in services" :key="s.slug" :value="s.name">{{ s.name }}</option>
                  </select>
                  <Icon name="ph:caret-down-bold" class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none group-focus-within:text-burgundy-500 transition-colors" size="18" />
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full mt-4 bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold py-5 rounded-[1.5rem] shadow-lg shadow-burgundy-900/10 hover:shadow-xl hover:shadow-burgundy-900/20 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group/btn"
            >
              Iniciar Conversa
              <Icon name="ph:paper-plane-tilt-fill" class="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </form>

          <!-- Footer Info -->
          <p class="text-[10px] text-center text-slate-400 leading-relaxed">
            Ao iniciar, você será redirecionado para o <br> WhatsApp oficial da Clínica.
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const isTyping = ref(false)
const { services } = useServices()

const form = reactive({
  name: '',
  petName: '',
  service: ''
})

const toggleChat = () => {
  isOpen.value = true
  // Simula digitando ao abrir pela primeira vez
  isTyping.value = true
  setTimeout(() => {
    isTyping.value = false
  }, 2000)
}

const sanitizeInput = (text: string) => {
  if (typeof text !== 'string') return ''
  return text
    .trim()
    .replace(/<[^>]*>?/gm, '') // Remove tags HTML
    .slice(0, 100) // Limite de segurança
}

const handleSubmit = () => {
  const sanitizedName = sanitizeInput(form.name)
  const sanitizedPetName = sanitizeInput(form.petName)
  const sanitizedService = sanitizeInput(form.service)

  if (!sanitizedName || !sanitizedPetName || !sanitizedService) {
    return
  }

  let message = `Olá, Dra. Kelly! Meu nome é ${sanitizedName}. Gostaria de agendar um atendimento de ${sanitizedService} para o meu pet ${sanitizedPetName}.`
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/5531999581716?text=${encodedMessage}`
  
  window.open(whatsappUrl, '_blank')
  isOpen.value = false
  
  // Limpa o formulário após o envio
  form.name = ''
  form.petName = ''
  form.service = ''
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #f1f1f1;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #e2e2e2;
}

@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 1; }
}
</style>
