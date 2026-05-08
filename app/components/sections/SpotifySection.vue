<script setup>
const showPlayer = ref(false)
</script>

<template>
  <section id="playlist" class="py-16 md:py-20 bg-teal-50 md:scroll-mt-20">
    <div class="md:main-container mx-auto px-6 md:px-8 lg:px-12">
      <div v-animate-on-scroll class="bg-white rounded-xl md:rounded-[3rem] p-6 md:p-12 lg:p-16 shadow-xl border border-teal-100 flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 text-teal-700 font-label-md bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/30">
            <Icon name="ph:music-note" size="18" />
            Para pets e humanos
          </div>
          <h2 class="text-headline-md md:text-4xl font-headline-md md:font-headline-lg text-tertiary leading-tight">Nossa Playlist Relaxante</h2>
          <p class="text-sm md:text-lg text-on-tertiary-fixed-variant leading-relaxed">
            Curada especialmente para reduzir o estresse e proporcionar um ambiente tranquilo durante as consultas e o dia a dia no seu lar.
          </p>
          <div class="hidden lg:block pt-4">
            <div class="flex items-center gap-4 text-teal-600 font-medium">
              <Icon name="ph:headphones-fill" size="32" class="opacity-20" />
              <p class="text-sm">Músicas calmas ajudam na redução da ansiedade dos pets.</p>
            </div>
          </div>
        </div>
        
        <div class="lg:w-1/2 w-full bg-background rounded-2xl md:rounded-3xl overflow-hidden shadow-inner border border-teal-100/50 min-h-[352px] relative group">
          <!-- Facade Placeholder -->
          <div 
            v-if="!showPlayer" 
            @click="showPlayer = true"
            class="absolute inset-0 z-10 cursor-pointer flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-teal-500/5 to-teal-500/10 hover:from-teal-500/10 hover:to-teal-500/20 transition-all duration-500"
          >
            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-500">
              <Icon name="ph:play-fill" class="text-burgundy-800 ml-1" size="40" />
            </div>
            <h3 class="text-tertiary font-headline-md text-xl mb-2">Música para relaxar</h3>
            <p class="text-on-tertiary-fixed-variant text-sm max-w-[250px]">Toque para carregar a playlist e reduzir o estresse do seu pet.</p>
            
            <div class="text-burgundy-800 absolute bottom-6 flex items-center gap-2 opacity-40 group-hover:opacity-60 transition-opacity">
              <Icon name="ph:spotify-logo" size="20" />
              <span class="text-[10px] font-bold uppercase tracking-widest">Spotify Player</span>
            </div>
          </div>

          <!-- Spotify Embed -->
          <iframe 
            v-if="showPlayer"
            data-testid="embed-iframe" 
            style="border-radius:12px" 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1E37fk7faq3cLB?utm_source=generator&autoplay=1" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Playlist Relaxante Spotify"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
