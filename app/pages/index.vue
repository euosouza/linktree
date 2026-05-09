<template>
  <div>
    <Breadcrumbs :items="[{ name: 'Início', item: '/' }]" />
    <SectionsHeroSection />
    <SectionsServicesSection />
    <SectionsHumanizedCareSection />
    <SectionsTestimonialsSection />
    <!-- <SectionsSpotifySection /> -->
    <SectionsVisualCloserSection />
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '../../libs/ui/components/breadcrumbs/Breadcrumbs.vue'

const { activeSection, isManualScrolling, navItems } = useNavigation()
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

onMounted(() => {

  const observerOptions = {
    rootMargin: '-20% 0px -20% 0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    if (isManualScrolling.value) return

    const visibleEntries = entries.filter(entry => entry.isIntersecting)
    if (visibleEntries.length > 0) {
      activeSection.value = visibleEntries[0]?.target.id || ""
    }
  }, observerOptions)

  navItems.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })
})

useHead({
  title: 'Dra. Kelly Fortes | Atendimento Veterinário Domiciliar',
  htmlAttrs: {
    class: 'scroll-smooth',
    lang: 'pt-BR'
  },
  meta: [
    { name: 'keywords', content: 'veterinário domiciliar, consulta pet em casa, atendimento veterinário em casa, Dra. Kelly Fortes, veterinária home care, saúde animal, vacinação em casa, CRMV 26979, veterinário SP, atendimento veterinário humanizado' },
    { name: 'author', content: 'Dra. Kelly Fortes' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kellyfortes.vet.br' },
    {
      rel: 'preload',
      as: 'image',
      href: `${baseURL}avatar.jpeg`,
      fetchpriority: 'high'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: `${baseURL}favicon.ico`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VeterinaryCare",
        "name": "Dra. Kelly Fortes | Atendimento Veterinário Domiciliar",
        "description": "Atendimento veterinário humanizado e profissional no conforto do seu lar. Consultas, vacinas e exames laboratoriais.",
        "openingHours": [
          "Mo-Fr 08:00-20:00",
          "Sa 09:00-14:00"
        ],
        "image": `${baseURL}avatar.jpeg`,
        "url": "https://euosouza.github.io/linktree/"
      })
    }
  ]
})

useSeoMeta({
  title: 'Dra. Kelly Fortes | Atendimento Veterinário Domiciliar',
  ogTitle: 'Dra. Kelly Fortes | Atendimento Veterinário Domiciliar',
  description: 'Atendimento veterinário humanizado no conforto do seu lar. Consultas, vacinas e cuidados preventivos para o seu pet sem o estresse da clínica.',
  ogDescription: 'Atendimento veterinário humanizado no conforto do seu lar. Consultas, vacinas e cuidados preventivos para o seu pet sem o estresse da clínica.',
  ogImage: `${baseURL}avatar.jpeg`,
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogLocale: 'pt_BR'
})
</script>

