<script setup lang="ts">
/**
 * Componente Breadcrumbs
 * 
 * Este componente é responsável por gerar dados estruturados (JSON-LD) 
 * e também fornece uma interface visual de navegação para o usuário.
 */

interface BreadcrumbItem {
  name: string
  item: string
}

const props = withDefaults(defineProps<{
  items: BreadcrumbItem[]
  showVisual?: boolean
}>(), {
  showVisual: true
})

const config = useRuntimeConfig()
const siteUrl = 'https://kellyfortes.vet.br'

// Lógica JSON-LD
const jsonLd = computed(() => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": props.items.map((item, index) => {
    let fullUrl = item.item
    if (!fullUrl.startsWith('http')) {
      const path = item.item.startsWith('/') ? item.item : `/${item.item}`
      fullUrl = `${siteUrl}${path}`
    }

    return {
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": fullUrl
    }
  })
}))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd.value)
    }
  ]
})
</script>

<template>
  <nav 
    v-if="showVisual && items.length > 1" 
    class="main-container mx-auto"
    aria-label="Breadcrumb"
  >
    <ol class="flex flex-wrap items-center gap-2 text-sm">
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-2">
        <!-- Divisor -->
        <span v-if="index > 0" class="text-tertiary/20">/</span>
        
        <!-- Link ou Texto -->
        <NuxtLink 
          v-if="index < items.length - 1"
          :to="item.item"
          class="text-tertiary/50 hover:text-burgundy-800 transition-colors"
        >
          {{ item.name }}
        </NuxtLink>
        
        <span 
          v-else 
          class="font-semibold text-burgundy-900/70"
          aria-current="page"
        >
          {{ item.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.main-container {
  max-width: 1280px;
}
</style>
