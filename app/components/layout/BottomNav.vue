<template>
  <nav class="md:hidden fixed bottom-0 left-0 right-0 mx-auto bg-white border-t border-tertiary-container/20 flex justify-around items-center px-1 py-3 z-50">
    <a v-for="item in navItems"
       :key="item.id"
       :href="`#${item.id}`"
       @click="$emit('setActive', item.id)"
       :aria-label="item.ariaLabel"
       :class="activeSection === item.id ? 'text-burgundy-700' : 'text-on-tertiary-fixed-variant'" 
       class="flex flex-col items-center justify-center px-3 py-1 hover:text-burgundy-800 rounded-xl transition-all">
      <Icon :name="item.icon" size="20" />
      <span class="text-[10px] font-semibold leading-tight mt-0.5">{{ item.label }}</span>
    </a>
  </nav>
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
