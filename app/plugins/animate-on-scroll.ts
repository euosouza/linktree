export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animate-on-scroll', {
    getSSRProps() {
      return {}
    },
    mounted(el, binding) {
      // 1. Aplicamos apenas o estado inicial oculto, SEM as classes de transição.
      // Isso evita que o elemento "anime para fora" (flicker) durante a hidratação.
      el.classList.add('opacity-0', 'translate-y-8');

      // Valor do delay vindo do binding (ex: v-animate-on-scroll="'200ms'")
      if (binding.value) {
        el.style.transitionDelay = binding.value;
      }

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 3. Quando visível, removemos o estado oculto e garantimos que o visível seja aplicado.
              // As classes de transição (adicionadas no passo 2) farão o trabalho.
              el.classList.remove('opacity-0', 'translate-y-8');
              el.classList.add('opacity-100', 'translate-y-0');
              
              // Para de observar após animar
              observer.unobserve(el);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      // 2. Usamos requestAnimationFrame para garantir que o estado inicial (oculto) foi processado
      // antes de adicionarmos as classes de transição e começarmos a observar.
      // Isso evita o flicker sem causar reflow forçado (como offsetHeight).
      requestAnimationFrame(() => {
        el.classList.add('transition-all', 'duration-1000', 'ease-out');
        
        // Pequeno atraso adicional para garantir que a transição seja registrada pelo navegador
        // antes que a mudança de opacidade ocorra (caso o elemento já esteja na tela).
        setTimeout(() => {
          observer.observe(el);
        }, 20);
      });
    }
  });
});
