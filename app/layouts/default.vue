<template>
  <div class="font-body-md text-tertiary antialiased min-h-screen bg-white">
    <TheHeader 
      :nav-items="navItems" 
      :active-section="activeSection" 
      @set-active="handleSetActive" 
    />

    <main class="md:max-w-none mx-auto bg-white">      
      <slot />
    </main>
    <TheFooter 
      :nav-items="navItems" 
      @set-active="handleSetActive"
    />

    <FloatingWhatsApp />
  </div>
</template>

<script setup>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import FloatingWhatsApp from '~/components/FloatingWhatsApp.vue'

const { navItems, activeSection, isManualScrolling } = useNavigation()
const route = useRoute()

const handleSetActive = (id) => {
  const item = navItems.find(i => i.id === id)
  if (!item) return

  // Normaliza caminhos para comparação (remove barra final se houver)
  const currentPath = route.path.replace(/\/$/, '') || '/'
  const itemPath = item.path.split('#')[0].replace(/\/$/, '') || '/'
  
  // Se o item aponta para uma página diferente, deixa o NuxtLink cuidar da navegação
  // e não fazemos o scroll manual aqui.
  if (itemPath !== currentPath) {
    activeSection.value = id
    return
  }
  
  // Se for uma âncora na mesma página, fazemos o scroll suave
  isManualScrolling.value = true
  activeSection.value = id
  
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
  
  setTimeout(() => {
    isManualScrolling.value = false
  }, 800)
}
</script>
