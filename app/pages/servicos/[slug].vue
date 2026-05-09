<template>
  <div v-if="service">    
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



<script setup>
const route = useRoute()
const { getServiceBySlug } = useServices()
const service = getServiceBySlug(route.params.slug)

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

