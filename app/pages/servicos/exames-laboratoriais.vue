<template>
  <div v-if="service" class="bg-on-tertiary-container/5 min-h-screen"> 
 
    <main>
      <ServiceHero :service="service" />
      
      <ServiceLabExamsHomeBenefits />
      
      <ServiceLabExamsListSection />
      
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
      
      <ServiceTestimonials :testimonials="service.testimonials" />
      
      <ServiceFAQ :faqs="service.faqs" />
      
      <ServiceRelated :current-slug="service.slug" />
      
      <ServiceCTA 
        :service-name="service.name" 
        cta-title="Diagnóstico rápido e preciso em casa"
        cta-description="Realize a coleta de exames sem o estresse da clínica. Praticidade para você e conforto absoluto para o seu pet."
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '../../../libs/ui/components/breadcrumbs/Breadcrumbs.vue'

const { getServiceBySlug } = useServices()
const service = getServiceBySlug('exames-laboratoriais')

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Serviço não encontrado' })
}

const prepChecklist = [
  { title: 'Jejum Alimentar', description: 'Geralmente de 8 a 12 horas para cães e 6 a 8 horas para gatos.' },
  { title: 'Água à vontade', description: 'O pet pode beber água normalmente, a menos que orientado o contrário.' },
  { title: 'Local Tranquilo', description: 'Prepare um local calmo e iluminado para a realização da coleta.' }
]

const { showHeader } = useNavigation()

onMounted(() => {
  showHeader.value = true
})

useSeoMeta({
  title: `${service.name} Domiciliares | Dra. Kelly Fortes`,
  ogTitle: `${service.name} Domiciliares | Dra. Kelly Fortes`,
  description: service.shortDescription,
  ogDescription: service.shortDescription,
  ogType: 'website'
})
</script>
