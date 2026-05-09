<template>
  <div v-if="service" class="bg-on-tertiary-container/5 min-h-screen"> 
 
    <main>
      <ServiceHero :service="service" />
      
      <ServiceBenefits :benefits="service.benefits" />
      
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
      
      <ServiceTestimonials :testimonials="service.testimonials" />
      
      <ServiceFAQ :faqs="service.faqs" />
      
      <ServiceRelated :current-slug="service.slug" />
      
      <ServiceCTA 
        :service-name="service.name" 
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '../../../libs/ui/components/breadcrumbs/Breadcrumbs.vue'

const { getServiceBySlug } = useServices()
const service = getServiceBySlug('consulta-geral')

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Serviço não encontrado' })
}

const { showHeader } = useNavigation()

onMounted(() => {
  showHeader.value = true
})

useSeoMeta({
  title: `${service.name} em Domicílio | Dra. Kelly Fortes`,
  ogTitle: `${service.name} em Domicílio | Dra. Kelly Fortes`,
  description: service.shortDescription,
  ogDescription: service.shortDescription,
  ogType: 'website'
})
</script>
