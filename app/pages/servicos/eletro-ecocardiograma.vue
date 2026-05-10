<template>
  <div v-if="service" class="bg-on-tertiary-container/5 min-h-screen"> 
 
    <main>
      <ServiceHero :service="service" />
      
      <ServiceBenefits :benefits="service.benefits" />
      
      <div v-animate-on-scroll class="py-16 md:py-24 bg-white">
        <div class="main-container mx-auto px-6 md:px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="w-16 h-16 bg-burgundy-100 rounded-2xl flex items-center justify-center text-burgundy-800 mb-8">
                <Icon name="ph:heartbeat-fill" size="40" />
              </div>
              <h2 class="text-3xl md:text-5xl font-bold font-headline-lg text-tertiary mb-6">Por que o check-up cardiológico é essencial?</h2>
              <p class="text-lg text-on-tertiary-fixed-variant leading-relaxed mb-6">
                Muitas doenças cardíacas em pets são silenciosas. O ecocardiograma permite visualizar o funcionamento do coração em tempo real, enquanto o eletrocardiograma monitora o ritmo elétrico.
              </p>
              <ul class="space-y-4">
                <li v-for="i in ['Pets acima de 7 anos', 'Antes de qualquer cirurgia', 'Raças predispostas', 'Sopro cardíaco detectado']" :key="i" class="flex items-center gap-3 font-bold text-tertiary">
                   <Icon name="ph:check-circle-fill" class="text-teal-600" size="24" />
                   {{ i }}
                </li>
              </ul>
            </div>
            <div class="bg-burgundy-50 p-8 md:p-12 rounded-[3rem] border border-burgundy-100 relative">
               <Icon name="ph:activity" class="absolute top-10 right-10 text-burgundy-200" size="100" />
               <h3 class="text-2xl font-bold text-tertiary mb-6 relative z-10">Segurança Anestésica</h3>
               <p class="text-on-tertiary-fixed-variant mb-8 relative z-10">
                 Se o seu pet vai passar por um procedimento cirúrgico, o risco cirúrgico cardiológico é indispensável para garantir a segurança da anestesia.
               </p>
               <div class="p-6 bg-white rounded-2xl border border-burgundy-100 relative z-10">
                 <p class="text-sm font-bold text-burgundy-800 uppercase tracking-wider mb-2">Incluso neste exame</p>
                 <p class="text-tertiary">Laudo detalhado assinado por médico veterinário cardiologista parceiro.</p>
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
const service = getServiceBySlug('eletro-ecocardiograma')

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
