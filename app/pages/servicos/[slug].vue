<template>
  <div v-if="service" class="bg-on-tertiary-container/5 min-h-screen"> 
    <div class="main-container mx-auto px-6 pt-8 bg-burgundy-50">  
      <Breadcrumbs :items="[
        { name: 'Início', item: '/' },
        { name: 'Serviços', item: '/#servicos' },
        { name: service.name, item: `/servicos/${service.slug}` }
      ]" />
    </div>   
    <main>
      <ServiceHero :service="service" />
      
      <ServiceIncludes 
        :includes="service.includes" 
        :icon="service.icon" 
        :duration="service.duration" 
      />
      
      <ServiceVideo :video-url="service.videoUrl" />
      
      <ServiceGallery :gallery="service.gallery" />
      
      <ServiceSteps :steps="service.steps" />
      
      <ServiceAnimals :animals="service.animals" />
      
      <ServiceAftercare :aftercare="service.aftercare" />
      
      <ServiceFAQ :faqs="service.faqs" />
      
      <ServiceRelated :current-slug="service.slug" />
      
      <ServiceCTA :service-name="service.name" />
    </main>
  </div>
</template>



<script setup lang="ts">
import Breadcrumbs from '../../../libs/ui/components/breadcrumbs/Breadcrumbs.vue'

const route = useRoute()
const { getServiceBySlug } = useServices()
const service = getServiceBySlug(route.params.slug as string)

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Serviço não encontrado' })
}

const { showHeader } = useNavigation()


onMounted(() => {
  showHeader.value = true
})

onUnmounted(() => {
  showHeader.value = true
})


useHead({
  title: `${service.name} | Dra. Kelly Fortes`,
  meta: [
    { name: 'description', content: service.shortDescription }
  ]
})

useSeoMeta({
  title: `${service.name} | Dra. Kelly Fortes`,
  ogTitle: `${service.name} | Dra. Kelly Fortes`,
  description: service.shortDescription,
  ogDescription: service.shortDescription,
  ogType: 'website'
})
</script>

