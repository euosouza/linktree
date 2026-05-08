<template>
  <div class="font-body-md text-tertiary antialiased min-h-screen bg-white">
    <!-- Top Navigation Bar -->
    <header class="bg-on-tertiary/80 backdrop-blur-md sticky top-0 z-50 shadow-sm w-full border-b border-tertiary-container/20 hidden md:block">
      <div class="main-container mx-auto py-8 flex justify-between items-center px-8 md:px-12">
        <span class="text-headline-md font-headline-md text-burgundy-800"></span>
        <div class="hidden md:flex gap-10 items-center">
          <a v-for="item in navItems" 
             :key="item.id"
             :href="`#${item.id}`"
             @click="setActiveManually(item.id)"
             :class="activeSection === item.id ? 'text-burgundy-800 font-bold' : 'text-tertiary'" 
             class="hover:text-burgundy-800 transition-all font-label-md">
            {{ item.label }}
          </a>
        </div>
      </div>
    </header>

    <main class="md:max-w-none mx-auto bg-white ">      
      <!-- Integrated Split Hero Section -->
      <section id="home" class="md:scroll-mt-20">
        <div class="py-16 md:py-20 px-6 relative md:overflow-hidden flex flex-col md:flex-row md:items-center"> 
          <div class="absolute inset-0 mesh-bg opacity-50 pointer-events-none hidden md:block"></div>
          <div class="md:main-container md:mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-12 items-center md:py-12 md:px-8 lg:px-12 w-full">
            
            <div class="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left z-10 space-y-4 md:space-y-8">
              
              <!-- Mobile Profile Image -->
              <div v-animate-on-scroll class="md:hidden relative w-32 h-32 rounded-full overflow-hidden border-4 border-tertiary-container/20 shadow-sm">
                  <img alt="Foto de perfil da Dra. Kelly Fortes" class="w-full h-full object-cover" src="/avatar.jpeg" width="128" height="128" fetchpriority="high">
                </div>
  
                <!-- Mobile CRMV Badge -->
              <div v-animate-on-scroll="'50ms'" class="md:hidden inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-md border border-tertiary-container/20 hover:scale-105 transition-transform">
                <div class="w-9 h-9 bg-teal-50 flex items-center justify-center rounded-lg shrink-0">
                  <Icon name="ph:first-aid" size="20" class="text-teal-800" />
                </div>
                  <div class="text-left">
                  <p class="font-bold text-sm text-tertiary">CRMV 12345</p>
                  <p class="text-[11px] text-on-tertiary-fixed-variant font-medium">Registro Profissional Ativo</p>
                </div>
              </div>
  
              <div v-animate-on-scroll="'100ms'" class="inline-flex items-center gap-2 text-teal-700 font-label-md bg-teal-500/10 px-4 py-1.5 md:px-5 md:py-2.5 rounded-full border border-teal-500/30">
                <Icon name="ph:seal-check-fill" size="18" />
                Cuidado Veterinário Domiciliar
              </div>
              
              <h1 v-animate-on-scroll="'200ms'" class="font-bold text-2xl md:text-5xl lg:text-7xl font-headline-lg text-on-background md:leading-[1.1]">
                A Dra. Kelly Fortes <span class="md:text-burgundy-800">vai até a sua Casa</span>
              </h1>
              
              <p v-animate-on-scroll="'300ms'" class="text-sm md:text-body-lg font-body-lg text-on-tertiary-fixed-variant leading-snug md:leading-normal md:max-w-[550px] mt-2 md:mt-0">
                Ofereço atendimento veterinário profissional no conforto e segurança do seu lar, garantindo uma experiência livre de estresse para o seu pet e total praticidade para você.
              </p>
  
              <div v-animate-on-scroll="'400ms'" class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
                <!-- CTA Button — WhatsApp -->
                <a class="group flex items-center justify-center gap-3 bg-burgundy-700 text-white py-4 px-8 rounded-lg font-button text-button shadow-md hover:bg-burgundy-800 hover:shadow-xl hover:shadow-burgundy-800/20 hover:-translate-y-1 active:scale-95 active:shadow-md transition-all duration-300"
                   href="https://wa.me/5500000000000?text=Olá%2C%20Dra.%20Kelly!%20Gostaria%20de%20agendar%20um%20atendimento%20domiciliar%20para%20o%20meu%20pet%20"
                   target="_blank" rel="noopener noreferrer">
                  <Icon name="ph:whatsapp-logo-fill" size="24" class="transition-transform duration-300 group-hover:rotate-12" />
                  Agendar Atendimento
                </a>
                <!-- Social Button — Instagram -->
                <a class="flex items-center justify-center gap-2 text-tertiary font-label-md px-8 py-4 border-2 border-tertiary/30 rounded-lg hover:bg-tertiary/5 hover:border-tertiary transition-all"
                   href="https://instagram.com/kellyfortes.vet"
                   target="_blank" rel="noopener noreferrer">  
                   <Icon name="ph:instagram-logo" size="24" />
                  Acompanha no Instagram
                </a>
              </div>
            </div>
            
            <!-- Desktop Asymmetrical Image -->
            <div v-animate-on-scroll="'500ms'" class="lg:col-span-5 relative hidden md:block">
              <div class="relative w-full aspect-square md:max-w-md mx-auto">
                <div class="absolute inset-0 bg-burgundy-800/10 rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] animate-[pulse_8s_infinite]"></div>
                <div class="relative w-full h-full rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] overflow-hidden border-8 border-white shadow-2xl z-10">
                  <img alt="Dra. Kelly Fortes realizando um atendimento veterinário carinhoso" class="w-full h-full object-cover" src="/avatar.jpeg" width="600" height="600" fetchpriority="high">
                </div>
                <div class="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-tertiary-container/20 z-20 hover:scale-105 transition-transform">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 md:w-20 md:h-20 bg-teal-100 flex items-center justify-center rounded-lg md:rounded-[1.5rem] shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="ph:first-aid" class="text-teal-800 text-2xl md:text-4xl" />
                    </div>
                    <div>
                      <p class="font-bold text-base">CRMV 12345</p>
                      <p class="text-xs text-on-tertiary-fixed-variant font-medium">Registro Profissional Ativo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>

      <!-- Services Section with Dynamic Grid -->
      <section class="bg-on-tertiary-container/5 md:scroll-mt-20" id="servicos">
        <div class="py-16 md:py-20 pt-0 px-6 md:main-container md:mx-auto md:px-8 lg:px-12 space-y-4 md:space-y-0">
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

      <!-- Featured Banner - Humanized Care -->
      <section class="bg-burgundy-800">
        <div class="md:main-container mx-auto px-6 md:px-0 py-16 md:py-20 md:px-8 lg:px-12 mt-0">
          <div v-animate-on-scroll class="md:max-w-[90%] mx-auto rounded-xl md:rounded-[3rem] overflow-hidden shadow-lg md:shadow-2xl flex flex-col lg:flex-row bg-white group">
            <div  class="lg:w-1/2 relative md:min-h-[400px] overflow-hidden">
              <img alt="Dra. Kelly Fortes atendendo um cachorro no sofá de casa, ambiente tranquilo e sem estresse" class="w-full h-48 md:absolute md:inset-0 md:h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/banner_1.jpeg" loading="lazy" decoding="async">
              <div class="hidden md:block absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
            <div class="lg:w-1/2 p-5 md:p-12 lg:p-14 flex flex-col justify-center space-y-6 md:space-y-8 ">
              <h2 v-animate-on-scroll="'100ms'" class="text-headline-md md:text-4xl font-headline-md md:font-headline-lg text-tertiary leading-tight">Atendimento que respeita o tempo do seu pet</h2>
              <p v-animate-on-scroll="'200ms'" class="text-body-md md:text-lg text-on-tertiary-fixed-variant leading-relaxed">
                Nossa missão é transformar o cuidado veterinário em um momento de carinho. Ao realizar as consultas no território do animal, eliminamos os gatilhos de estresse, permitindo diagnósticos mais precisos e tratamentos mais eficazes.
              </p>
              <div v-animate-on-scroll="'250ms'" class="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6 mt-4 md:mt-0">
                <div class="flex items-start gap-3">
                  <Icon name="ph:check-circle" class="text-teal-500 p-1 rounded-full shadow-sm" size="24" />
                  <span class="text-tertiary font-medium text-sm md:text-base">Sem estresse de transporte</span>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="ph:check-circle" class="text-teal-500 p-1 rounded-full shadow-sm" size="24" />
                  <span class="text-tertiary font-medium text-sm md:text-base">Horários flexíveis</span>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="ph:check-circle" class="text-teal-500 p-1 rounded-full shadow-sm" size="24" />
                  <span class="text-tertiary font-medium text-sm md:text-base">Ambiente familiar</span>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="ph:check-circle" class="text-teal-500 p-1 rounded-full shadow-sm" size="24" />
                  <span class="text-tertiary font-medium text-sm md:text-base">Foco 100% no seu animal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bento Style Testimonials & FAQ Section -->
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

      <!-- Visual Closer (Image with Prompting) -->
      <section class="py-16 md:py-20 pt-0 px-6 ">
        <div  v-animate-on-scroll  class="md:main-container md:mx-auto md:px-8 lg:px-12">
          <div class="relative rounded-xl md:rounded-[3rem] overflow-hidden h-72 sm:h-80 md:h-auto md:aspect-[21/9] md:max-w-[90%] mx-auto group shadow-lg md:shadow-2xl">
            <img alt="Close de um estetoscópio e carinho em um gato, simbolizando cuidado humanizado" class="w-full h-full object-cover md:transition-transform md:duration-1000 md:group-hover:scale-110" src="/banner_2.jpeg" loading="lazy" decoding="async">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 md:via-black/20 to-transparent flex flex-col justify-end p-5 md:p-12 lg:p-24">
              <div class="md:max-w-2xl">
                <h2 v-animate-on-scroll class="text-white text-xl md:text-4xl lg:text-5xl font-headline-lg mb-2 md:mb-6">Compromisso Real com a Saúde Animal</h2>
                <p v-animate-on-scroll="'200ms'" class="text-white/90 text-sm md:text-lg lg:text-xl font-body-md">Cada visita é uma oportunidade de proporcionar uma vida mais longa, saudável e feliz para o seu melhor amigo. Agende hoje mesmo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>      
    </main>

    <!-- Footer — único e responsivo -->
    <footer class="bg-white border-t border-tertiary-container/10 pt-12 pb-6 px-6 md:px-0">
      <div class="md:main-container md:mx-auto md:px-8 lg:px-12 px-6 ">
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
        <p class="text-xs md:text-sm text-on-tertiary-fixed-variant px-6 ">
          © 2024 Dra. Kelly Fortes — CRMV 12345. Todos os direitos reservados.
        </p>
      </div>
    </footer>

    <!-- Bottom Navigation Bar (Mobile Only) -->
    <nav class="md:hidden fixed bottom-0 left-0 right-0 mx-auto bg-white border-t border-tertiary-container/20 flex justify-around items-center px-1 py-3 z-50">
      <a v-for="item in navItems"
         :key="item.id"
         :href="`#${item.id}`"
         @click="setActiveManually(item.id)"
         :aria-label="item.ariaLabel"
         :class="activeSection === item.id ? 'text-burgundy-700' : 'text-on-tertiary-fixed-variant'" 
         class="flex flex-col items-center justify-center px-3 py-1 hover:text-burgundy-800 rounded-xl transition-all">
        <Icon :name="item.icon" size="20" />
        <span class="text-[10px] font-semibold leading-tight mt-0.5">{{ item.label }}</span>
      </a>
    </nav>   
  </div>
</template>

<script setup>
const activeSection = ref('home')
const isManualScrolling = ref(false)
let scrollTimeout = null

const navItems = [
  { id: 'home', label: 'Início', icon: 'ph:house-fill', ariaLabel: 'Ir para o início' },
  { id: 'servicos', label: 'Serviços', icon: 'ph:first-aid-fill', ariaLabel: 'Ver serviços' },
  { id: 'depoimentos', label: 'Depoimentos', icon: 'ph:star-fill', ariaLabel: 'Ver depoimentos' },
  { id: 'faq', label: 'Dúvidas', icon: 'ph:question-fill', ariaLabel: 'Dúvidas frequentes' }
]

const setActiveManually = (id) => {
  isManualScrolling.value = true
  activeSection.value = id
  
  if (scrollTimeout) clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    isManualScrolling.value = false
  }, 800) // Wait for smooth scroll to finish
}

onMounted(() => {
  const observerOptions = {
    rootMargin: '-20% 0px -20% 0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    if (isManualScrolling.value) return

    const visibleEntries = entries.filter(entry => entry.isIntersecting)
    if (visibleEntries.length > 0) {
      activeSection.value = visibleEntries[0].target.id
    }
  }, observerOptions)

  navItems.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })
})

useHead({
  title: 'Dra. Kelly Fortes | Atendimento Veterinário em Casa',
  htmlAttrs: {
    class: 'scroll-smooth',
    lang: 'pt-BR'
  },
  meta: [
    { name: 'description', content: 'Cuidado veterinário domiciliar com amor e profissionalismo.' }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap',
      media: 'print',
      onload: "this.media='all'"
    },
    {
      rel: 'preload',
      as: 'image',
      href: '/avatar.jpeg',
      fetchpriority: 'high'
    }
  ]
})
</script>
