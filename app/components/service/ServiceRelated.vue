<template>
  <section class="py-16 bg-white border-t border-tertiary-container/10">
    <div class="main-container mx-auto px-6 md:px-12">
      <div class="flex items-center justify-between mb-12">
        <h2 v-animate-on-scroll class="text-3xl font-bold font-headline-lg text-tertiary">Outros Serviços</h2>
        <NuxtLink v-animate-on-scroll="'100ms'" to="/#servicos" class="text-burgundy-800 font-bold hover:underline flex items-center gap-2">
          Ver todos <Icon name="ph:arrow-right-bold" />
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NuxtLink 
          v-for="(service, index) in relatedServices" 
          :key="service.slug" 
          :to="`/servicos/${service.slug}`"
          v-animate-on-scroll="`${index * 100}ms`"
          class="group bg-on-tertiary-container/5 p-8 rounded-3xl border border-tertiary-container/10 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div class="w-16 h-16 bg-teal-100 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
            <Icon :name="service.icon" size="32" class="text-teal-800" />
          </div>
          <h3 class="text-xl font-bold text-tertiary mb-3">{{ service.name }}</h3>
          <p class="text-sm text-on-tertiary-fixed-variant line-clamp-2">{{ service.shortDescription }}</p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { services } = useServices()
const props = defineProps({
  currentSlug: {
    type: String,
    required: true
  }
})

const relatedServices = computed(() => {
  return services.filter(s => s.slug !== props.currentSlug).slice(0, 3)
})
</script>
