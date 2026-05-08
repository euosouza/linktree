export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animate-on-scroll', {
    getSSRProps(binding, vnode) {
      return {}
    },
    mounted(el, binding) {
      // Classes iniciais (estado oculto e preparação da transição)
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');

      // Se houver um atraso passado como modificador ou valor (ex: v-animate-on-scroll.delay-200)
      if (binding.value) {
        el.style.transitionDelay = binding.value;
      }

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Remove classes de estado oculto
              el.classList.remove('opacity-0', 'translate-y-8');
              // Adiciona classes de estado visível
              el.classList.add('opacity-100', 'translate-y-0');
              
              // Para de observar depois que animar (anima apenas uma vez)
              observer.unobserve(el);
            }
          });
        },
        {
          threshold: 0.1, // Dispara quando 10% do elemento estiver visível
          rootMargin: '0px 0px -50px 0px' // Margem para disparar um pouco antes
        }
      );

      // Espera um frame para garantir que o layout inicializou
      requestAnimationFrame(() => {
        observer.observe(el);
      });
    }
  });
});
