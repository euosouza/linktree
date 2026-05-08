<template>
  <div class="font-body-md text-tertiary antialiased min-h-screen bg-white">
    <LayoutTheHeader 
      :nav-items="navItems" 
      :active-section="activeSection" 
      @set-active="setActiveManually" 
    />

    <main class="md:max-w-none mx-auto bg-white">      
      <SectionsHeroSection />
      <SectionsServicesSection />
      <SectionsHumanizedCareSection />
      <SectionsTestimonialsSection />
      <SectionsVisualCloserSection />
    </main>

    <LayoutTheFooter />

    <LayoutBottomNav 
      :nav-items="navItems" 
      :active-section="activeSection" 
      @set-active="setActiveManually" 
    />
  </div>
</template>


<script setup>
const activeSection = ref('home')
const isManualScrolling = ref(false)
let scrollTimeout = null

const navItems = [
  { id: 'home', label: 'Início', icon: 'ph:house-fill', ariaLabel: 'Ir para o início' },
  { id: 'servicos', label: 'Serviços', icon: 'ph:first-aid-fill', ariaLabel: 'Ver serviços' },
  { id: 'depoimentos', label: 'Depoimentos', icon: 'ph:star-fill', ariaLabel: 'Ver depoimentos' },
  { id: 'faq', label: 'Dúvidas', icon: 'ph:question-fill', ariaLabel: 'Dúvidas frequentes' }
]

const setActiveManually = (id) => {
  isManualScrolling.value = true
  activeSection.value = id
  
  if (scrollTimeout) clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    isManualScrolling.value = false
  }, 800) // Wait for smooth scroll to finish
}

onMounted(() => {
  const observerOptions = {
    rootMargin: '-20% 0px -20% 0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    if (isManualScrolling.value) return

    const visibleEntries = entries.filter(entry => entry.isIntersecting)
    if (visibleEntries.length > 0) {
      activeSection.value = visibleEntries[0].target.id
    }
  }, observerOptions)

  navItems.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })
})

useHead({
  title: 'Dra. Kelly Fortes | Atendimento Veterinário em Casa',
  htmlAttrs: {
    class: 'scroll-smooth',
    lang: 'pt-BR'
  },
  meta: [
    { name: 'description', content: 'Cuidado veterinário domiciliar com amor e profissionalismo.' }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap',
      media: 'print',
      onload: "this.media='all'"
    },
    {
      rel: 'preload',
      as: 'image',
      href: '/avatar.jpeg',
      fetchpriority: 'high'
    }
  ]
})
</script>
