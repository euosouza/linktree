<template>
  <section v-if="gallery && gallery.length" class="py-16 bg-white">
    <div class="main-container mx-auto px-6 md:px-12">
      <div class="text-center mb-12">
        <h2 v-animate-on-scroll class="text-3xl font-bold font-headline-lg text-tertiary mb-4">Galeria do Procedimento</h2>
        <p v-animate-on-scroll="'100ms'" class="text-on-tertiary-fixed-variant">Veja registros reais de atendimentos realizados.</p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(img, index) in gallery" :key="index" v-animate-on-scroll="`${index * 150}ms`" class="group relative aspect-square rounded-3xl overflow-hidden shadow-lg">
          <NuxtImg 
            :src="img" 
            alt="Procedimento veterinário" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            format="webp"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Icon name="ph:magnifying-glass-plus" size="32" class="text-white" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  gallery: {
    type: Array,
    required: true
  }
})
</script>
