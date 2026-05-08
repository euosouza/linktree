<template>
  <footer class="bg-white border-t border-tertiary-container/10 pt-12 pb-6 px-6 md:px-0">
    <div class="md:main-container md:mx-auto md:px-8 lg:px-12 px-6">
      <!-- Top area -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10">
        <!-- Brand + social -->
        <div v-animate-on-scroll class="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <span class="text-2xl md:text-3xl font-bold font-headline-md text-burgundy-800">Dra. Kelly Fortes</span>
          <p class="text-on-tertiary-fixed-variant text-sm md:text-base max-w-md">Oferecendo excelência médica veterinária onde seu pet se sente mais seguro: em casa. Atendimento personalizado e humanizado.</p>
          <div class="flex gap-4">
            <a class="text-burgundy-800 hover:scale-110 transition-transform bg-white p-3 rounded-full shadow-sm" href="https://instagram.com/kellyfortes.vet" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Instagram">
              <Icon name="ph:instagram-logo" size="24" />
            </a>
          </div>
        </div>

        <!-- Links + Contatos: empilhados no mobile, 1 col each no desktop -->
        <div class="grid grid-cols-1 md:contents gap-6">
          <div v-animate-on-scroll="'100ms'" class="flex flex-col items-center md:items-start text-center md:text-left space-y-3 md:space-y-6">
            <h3 class="font-bold text-tertiary uppercase tracking-wider text-xs md:text-sm">Links Úteis</h3>
            <nav class="flex flex-col items-center md:items-start gap-2 md:gap-3 text-sm">
              <a class="text-on-tertiary-fixed-variant hover:text-burgundy-800 transition-colors" href="#">Início</a>
              <a class="text-on-tertiary-fixed-variant hover:text-burgundy-800 transition-colors" href="#servicos">Serviços</a>
              <a class="text-on-tertiary-fixed-variant hover:text-burgundy-800 transition-colors" href="#depoimentos">Depoimentos</a>
              <a class="text-on-tertiary-fixed-variant hover:text-burgundy-800 transition-colors" href="#faq">Dúvidas</a>
            </nav>
          </div>
          <div v-animate-on-scroll="'200ms'" class="flex flex-col items-center md:items-start text-center md:text-left space-y-3 md:space-y-6">
            <h3 class="font-bold text-tertiary uppercase tracking-wider text-xs md:text-sm">Contatos</h3>
            <p class="text-on-tertiary-fixed-variant text-sm leading-relaxed">
              Seg–Sex: 08h–20h<br>
              Sábados: 09h–14h<br>
              contato@vethome.care
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom copyright -->
    <div class="pt-6 border-t border-tertiary-container/10 text-center">
      <p class="text-xs md:text-sm text-on-tertiary-fixed-variant px-6">
        © 2024 Dra. Kelly Fortes — CRMV 12345. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>
