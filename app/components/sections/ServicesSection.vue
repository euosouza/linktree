<template>
  <section class="bg-on-tertiary-container/5 md:scroll-mt-20" id="servicos">
    <div class="py-16 md:py-20 px-6 pt-8 md:main-container md:mx-auto md:px-8 lg:px-12 space-y-4 md:space-y-0">
      <div v-animate-on-scroll class="md:max-w-4xl mx-auto mb-12 flex flex-col items-center">
        <div class="inline-flex items-center gap-2 text-teal-700 font-label-md bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/30 mb-8">
          <Icon name="ph:first-aid" size="18" />
          O que oferecemos
        </div>
        <h2 class="text-headline-md md:text-4xl font-headline-md md:font-headline-lg text-tertiary mb-3 md:mb-6 text-center">
          Nossos Serviços Especializados
        </h2>
        <p class="text-sm md:text-lg text-on-tertiary-fixed-variant text-center">
          Soluções completas e preventivas para manter a saúde do seu animal de estimação sempre em dia, sem que ele precise enfrentar o medo de uma clínica tradicional.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mt-4 md:mt-0">
        <!-- Card 1 -->
        <div v-animate-on-scroll class="group bg-white p-5 md:p-12 rounded-xl md:rounded-[2.5rem] border border-tertiary-container/20 shadow-[0px_4px_20px_rgba(106,0,57,0.05)] md:shadow-sm md:hover:shadow-xl  md:hover:-translate-y-2 transition-all duration-300 flex md:flex-col items-start gap-4 md:gap-0">
          <div class="w-12 h-12 md:w-20 md:h-20 bg-teal-100 flex items-center justify-center rounded-lg md:rounded-[1.5rem] shrink-0 md:mb-8 group-hover:scale-110 transition-transform">
            <Icon name="ph:first-aid" class="text-teal-800 text-2xl md:text-4xl" />
          </div>
          <div>
            <h3 class="font-headline-md text-body-lg font-semibold md:text-2xl text-tertiary md:mb-4">Consulta Geral</h3>
            <p class="text-on-tertiary-fixed-variant text-sm md:text-body-md mt-1 md:mt-0 leading-relaxed md:leading-relaxed">Check-up completo, avaliação clínica minuciosa e orientações nutricionais personalizadas para cada fase da vida.</p>
          </div>
        </div>
        <!-- Card 2 -->
        <div v-animate-on-scroll="'100ms'" class="group bg-white p-5 md:p-12 rounded-xl md:rounded-[2.5rem] border border-tertiary-container/20 shadow-[0px_4px_20px_rgba(106,0,57,0.05)] md:shadow-sm md:hover:shadow-xl  md:hover:-translate-y-2 transition-all duration-300 flex md:flex-col items-start gap-4 md:gap-0">
          <div class="w-12 h-12 md:w-20 md:h-20 bg-teal-100 flex items-center justify-center rounded-lg md:rounded-[1.5rem] shrink-0 md:mb-8 group-hover:scale-110 transition-transform">
            <Icon name="ph:syringe" class="text-teal-800 text-2xl md:text-4xl" />
          </div>
          <div>
            <h3 class="font-headline-md text-body-lg font-semibold md:text-2xl text-tertiary md:mb-4">Vacinação</h3>
            <p class="text-on-tertiary-fixed-variant text-sm md:text-body-md mt-1 md:mt-0 leading-normal md:leading-relaxed">Protocolo vacinal completo com as melhores marcas do mercado, garantindo imunidade total no conforto do lar.</p>
          </div>
        </div>
        <!-- Card 3 -->
        <div v-animate-on-scroll="'200ms'" class="group bg-white p-5 md:p-12 rounded-xl md:rounded-[2.5rem] border border-tertiary-container/20 shadow-[0px_4px_20px_rgba(106,0,57,0.05)] md:shadow-sm md:hover:shadow-xl  md:hover:-translate-y-2 transition-all duration-300 flex md:flex-col items-start gap-4 md:gap-0">
          <div class="w-12 h-12 md:w-20 md:h-20 bg-teal-100 flex items-center justify-center rounded-lg md:rounded-[1.5rem] shrink-0 md:mb-8 group-hover:scale-110 transition-transform">
            <Icon name="ph:stethoscope" class="text-teal-800 text-2xl md:text-4xl" />
          </div>
          <div>
            <h3 class="font-headline-md text-body-lg font-semibold md:text-2xl text-tertiary md:mb-4">Exames Lab</h3>
            <p class="text-on-tertiary-fixed-variant text-sm md:text-body-md mt-1 md:mt-0 leading-normal md:leading-relaxed">Coleta de sangue, urina e outros exames diagnósticos realizados com rapidez e precisão durante a visita.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
