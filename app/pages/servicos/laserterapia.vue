<template>
  <div v-if="service" class="bg-on-tertiary-container/5 min-h-screen"> 
 
    <main>
      <ServiceHero :service="service" />
      
      <ServiceBenefits :benefits="service.benefits" />
      
      <div v-animate-on-scroll class="py-16 md:py-24 bg-white">
        <div class="main-container mx-auto px-6 md:px-12">
          <div class="bg-teal-900 rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full -mr-32 -mt-32"></div>
            <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-3xl md:text-5xl font-bold mb-6">Avanço Tecnológico no Alívio da Dor</h2>
                <p class="text-teal-100 text-lg md:text-xl leading-relaxed">
                  A Laserterapia de Baixa Intensidade (LLLT) é um tratamento indolor e não invasivo que estimula a regeneração celular e o alívio da inflamação. Perfeito para pets idosos com artrose ou em recuperação cirúrgica.
                </p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <p class="text-3xl font-bold mb-1">90%</p>
                  <p class="text-teal-200 text-sm">Redução da Dor</p>
                </div>
                <div class="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <p class="text-3xl font-bold mb-1">0%</p>
                  <p class="text-teal-200 text-sm">Efeitos Colaterais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
const service = getServiceBySlug('laserterapia')

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Serviço não encontrado' })
}

const { showHeader } = useNavigation()

onMounted(() => {
  showHeader.value = true
})

useSeoMeta({
  title: `${service.name} Veterinária em Domicílio | Dra. Kelly Fortes`,
  ogTitle: `${service.name} Veterinária em Domicílio | Dra. Kelly Fortes`,
  description: service.shortDescription,
  ogDescription: service.shortDescription,
  ogType: 'website'
})
</script>
