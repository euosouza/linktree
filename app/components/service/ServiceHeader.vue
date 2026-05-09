<template>
  <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm w-full border-b border-tertiary-container/10">
    <div class="main-container mx-auto py-4 md:py-6 flex justify-between items-center px-6 md:px-12">
      <NuxtLink to="/" class="flex items-center gap-2 text-burgundy-800 font-bold hover:scale-105 transition-transform">
        <Icon name="ph:arrow-left-bold" size="20" />
        <span class="hidden sm:inline">Voltar ao Início</span>
      </NuxtLink>

      <div class="flex items-center gap-3">
        <Icon name="ph:paw-print-fill" size="28" class="text-burgundy-800" />
        <span class="font-bold text-tertiary hidden xs:inline">Dra. Kelly Fortes</span>
      </div>

      <a class="flex items-center justify-center gap-2 bg-burgundy-700 text-white py-2.5 px-5 rounded-xl font-bold text-sm shadow-md hover:bg-burgundy-800 transition-all"
         href="https://wa.me/5531999581716?text=Olá%20Dra.%20Kelly!%20Gostaria%20de%20agendar%20um%20atendimento"
         target="_blank" rel="noopener noreferrer">
        <Icon name="ph:whatsapp-logo-fill" size="18" />
        <span class="hidden sm:inline">Agendar</span>
      </a>
    </div>
  </header>
</template>

<script setup>
// Header for service pages
</script>
