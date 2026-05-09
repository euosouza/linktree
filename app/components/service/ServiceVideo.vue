<template>
  <section v-if="videoUrl" class="py-16 bg-on-tertiary-container/5">
    <div class="main-container mx-auto px-6 md:px-12">
      <div class="text-center mb-12">
        <h2 v-animate-on-scroll class="text-3xl font-bold font-headline-lg text-tertiary mb-4">Vídeo Explicativo</h2>
        <p v-animate-on-scroll="'100ms'" class="text-on-tertiary-fixed-variant">Assista para entender melhor como realizamos este procedimento.</p>
      </div>
      
      <div v-animate-on-scroll="'200ms'" class="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
        <iframe 
          width="100%" 
          height="100%" 
          :src="videoUrl" 
          title="Video explicativo" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  videoUrl: {
    type: String,
    default: ''
  }
})
</script>
