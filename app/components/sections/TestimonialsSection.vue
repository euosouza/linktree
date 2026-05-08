<template>
  <section class="md:scroll-mt-20" id="depoimentos">
    <div class="py-16 md:py-20 px-6  md:main-container md:mx-auto md:px-8 lg:px-12 space-y-4 md:space-y-0">
      <div v-animate-on-scroll class="md:max-w-4xl mx-auto mb-12 flex flex-col items-center">
        <div class="inline-flex items-center gap-2 text-teal-700 font-label-md bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/30 mb-8">
          <Icon name="ph:star" size="18" />
          Depoimentos
        </div>
        <h2 class="text-headline-md md:text-4xl font-headline-md md:font-headline-lg text-tertiary mb-3 md:mb-6 text-center">
          Confiança e Excelência
        </h2>
        <p class="text-sm md:text-lg text-on-tertiary-fixed-variant text-center">
          Confira depoimentos de quem já escolheu o cuidado domiciliar e percebeu a diferença no bem-estar do seu pet.
        </p>
      </div>
      
      <!-- Unified Bento Grid — single source of truth for mobile & desktop -->
      <div class="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-3 md:gap-6">

        <!-- Testimonial 1 — order 2 mobile | col 1–7 row 1 desktop -->
        <div v-animate-on-scroll="'100ms'" class="order-2 md:order-none md:col-span-7 md:row-span-1 bg-white p-5 md:p-12 rounded-xl md:rounded-[2.5rem] border border-tertiary-container/20 shadow-sm md:hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div class="flex gap-1 mb-2 md:mb-6">
              <Icon v-for="i in 5" :key="i" name="ph:star-fill" class="text-yellow-500 text-sm md:text-xl" />
            </div>
            <p class="text-body-md md:text-xl text-tertiary italic leading-normal md:leading-relaxed mb-3 md:mb-8">"A praticidade de não precisar estressar meu gato levando na clínica é incrível. Dr. Vet é muito paciente e atencioso. Recomendo para todos que buscam carinho e profissionalismo."</p>
          </div>
          <div class="flex items-center gap-3 md:gap-4 mt-auto pt-3 md:pt-0">
            <div class="w-10 h-10 md:w-14 md:h-14 bg-teal-100 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-teal-800 text-base md:text-xl">M</div>
            <div>
              <p class="font-bold text-sm md:text-base text-tertiary">Mariana &amp; Pipoca</p>
              <p class="text-xs md:text-sm text-on-tertiary-fixed-variant">Tutor de Gato</p>
            </div>
          </div>
        </div>

        <!-- Trust Badge — order 1 mobile | col 8–12 row 1 desktop -->
        <div v-animate-on-scroll="'150ms'" class="order-1 md:order-none md:col-span-5 md:row-span-1 bg-burgundy-800 text-white rounded-xl md:rounded-[2.5rem] flex flex-col justify-center items-center text-center p-6 md:p-12 shadow-sm">
          <Icon name="ph:smiley-wink" class="text-4xl md:text-5xl mb-2 md:mb-4" />
          <p class="text-2xl md:text-3xl font-headline-md mb-1 md:mb-2">500+</p>
          <p class="text-burgundy-100/80 text-sm">Pets atendidos com amor este ano</p>
        </div>

        <!-- Testimonial 2 — order 3 mobile | col 1–7 row 2 desktop -->
        <div v-animate-on-scroll="'100ms'" class="order-3 md:order-last md:col-span-7 md:row-span-1 bg-white p-5 md:p-12 rounded-xl md:rounded-[2.5rem] border border-tertiary-container/20 shadow-sm md:hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div class="flex gap-1 mb-2 md:mb-6">
              <Icon v-for="i in 5" :key="i" name="ph:star-fill" class="text-yellow-500 text-sm md:text-xl" />
            </div>
            <p class="text-body-md md:text-xl text-tertiary italic leading-normal md:leading-relaxed mb-3 md:mb-8">"Melhor experiência veterinária que já tive. O cuidado em casa faz toda a diferença para o meu cachorro idoso, que tem dificuldades de locomoção. Um alívio ter esse serviço."</p>
          </div>
          <div class="flex items-center gap-3 md:gap-4 mt-auto pt-3 md:pt-0">
            <div class="w-10 h-10 md:w-14 md:h-14 bg-teal-100 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-teal-800 text-base md:text-xl">R</div>
            <div>
              <p class="font-bold text-sm md:text-base text-tertiary">Roberto &amp; Thor</p>
              <p class="text-xs md:text-sm text-on-tertiary-fixed-variant">Tutor de Cachorro</p>
            </div>
          </div>
        </div>

        <!-- FAQ — order 4 mobile | col 8–12 row 2 desktop -->
        <div v-animate-on-scroll="'150ms'" class="order-4 md:order-none md:col-span-5 md:row-span-1 bg-tertiary/5 p-6 rounded-xl space-y-3 md:scroll-mt-20" id="faq">
          <h2 class="text-headline-md font-headline-md text-tertiary px-2 mb-10">FAQ</h2>
          <details class="group bg-white rounded-xl border border-tertiary-container/20 overflow-hidden shadow-sm">
            <summary class="flex justify-between items-center p-4 cursor-pointer list-none font-label-md font-bold text-tertiary">
              <span>Quais regiões?</span>
              <Icon name="ph:caret-down-bold" class="transition-transform group-open:rotate-180 text-burgundy-800" size="20" />
            </summary>
            <div class="px-4 pb-4 text-sm text-on-tertiary-fixed-variant">Raio de até 30km da capital.</div>
          </details>
          <details class="group bg-white rounded-xl border border-tertiary-container/20 overflow-hidden shadow-sm">
            <summary class="flex justify-between items-center p-4 cursor-pointer list-none font-label-md font-bold text-tertiary">
              <span>Horários?</span>
              <Icon name="ph:caret-down-bold" class="transition-transform group-open:rotate-180 text-burgundy-800" size="20" />
            </summary>
            <div class="px-4 pb-4 text-sm text-on-tertiary-fixed-variant">Seg-Sex: 8h-20h | Sáb: 9h-14h.</div>
          </details>
          <details class="group bg-white rounded-xl border border-tertiary-container/20 overflow-hidden shadow-sm">
            <summary class="flex justify-between items-center p-4 cursor-pointer list-none font-label-md font-bold text-tertiary">
              <span>Pagamento?</span>
              <Icon name="ph:caret-down-bold" class="transition-transform group-open:rotate-180 text-burgundy-800" size="20" />
            </summary>
            <div class="px-4 pb-4 text-sm text-on-tertiary-fixed-variant">Pix, Débito e Crédito em domicílio.</div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>
