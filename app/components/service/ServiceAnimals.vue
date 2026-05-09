<template>
  <section class="py-12 bg-burgundy-800 text-white">
    <div class="main-container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div v-animate-on-scroll>
        <h2 class="text-2xl md:text-3xl font-bold font-headline-lg mb-2">Para quais animais?</h2>
        <p class="text-burgundy-100/80">Atendemos diversas espécies com o mesmo carinho.</p>
      </div>
      
      <div v-animate-on-scroll="'200ms'" class="flex flex-wrap justify-center gap-4">
        <div v-for="animal in animals" :key="animal" class="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full flex items-center gap-2">
          <Icon name="ph:check-circle-fill" size="18" class="text-teal-400" />
          <span class="font-bold tracking-wide uppercase text-xs">{{ animal }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  animals: {
    type: Array,
    required: true
  }
})
</script>
