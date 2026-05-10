<template>
  <div v-if="service" class="bg-on-tertiary-container/5 min-h-screen"> 
 
    <main>
      <ServiceHero :service="service" />
      
      <ServiceBenefits :benefits="service.benefits" />
      
      <ServicePrepChecklist :checklist="prepChecklist" />
      
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
      
      
      
      <ServiceCTA 
        :service-name="service.name" 
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '../../../libs/ui/components/breadcrumbs/Breadcrumbs.vue'

const { getServiceBySlug } = useServices()
const service = getServiceBySlug('ultrassonografia')

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Serviço não encontrado' })
}

const prepChecklist = [
  { title: 'Jejum Alimentar', description: 'Necessário para visualização nítida dos órgãos abdominais.' },
  { title: 'Bexiga Cheia', description: 'Tente evitar que o pet urine logo antes do exame.' },
  { title: 'Tricotomia (Raspa)', description: 'Uma pequena área do abdome precisará ser raspada para o contato do gel.' }
]

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
