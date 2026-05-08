<template>
  <header class="bg-on-tertiary/80 backdrop-blur-md sticky top-0 z-50 shadow-sm w-full border-b border-tertiary-container/20 hidden md:block">
    <div class="main-container mx-auto py-8 flex justify-between items-center px-8 md:px-12">
      <span class="text-headline-md font-headline-md text-burgundy-800"></span>
      <div class="hidden md:flex gap-10 items-center">
        <NuxtLink v-for="item in navItems" 
           :key="item.id"
           :to="`/#${item.id}`"
           @click="$emit('setActive', item.id)"
           :class="activeSection === item.id ? 'text-burgundy-800 font-bold' : 'text-tertiary'" 
           class="hover:text-burgundy-800 transition-all font-label-md">
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  navItems: {
    type: Array,
    required: true
  },
  activeSection: {
    type: String,
    required: true
  }
})

defineEmits(['setActive'])
</script>
