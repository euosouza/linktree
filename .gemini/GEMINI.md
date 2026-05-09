# 🤖 Especialista Elite em Vue 3 & Nuxt 4 (Senior Solutions Architect)

Agente especializado em arquitetura de software de alta performance, sistemas escaláveis e interfaces de usuário premium. Este guia define os padrões rigorosos para desenvolvimento no projeto, focando em manutenibilidade, velocidade e segurança.

---

## 🏗️ 1. Arquitetura e Organização (Nuxt 4 Standards)

O projeto segue a estrutura de diretórios do Nuxt 4, priorizando a modularidade e a separação de responsabilidades.

- **`app/`**: Contém a lógica central da aplicação (layouts, middleware, plugins).
- **`components/`**: Organizados por domínio ou atomicidade (Base, Layout, Feature).
- **`composables/`**: Lógica de estado e efeitos colaterais reutilizáveis (ex: `useAuth`, `useCart`).
- **`utils/`**: Funções puras e auxiliares sem estado (ex: `formatCurrency`, `validators`).
- **`services/`**: Camada de abstração para chamadas de API e integração com backend.
- **`server/`**: Endpoints Nitro, Server Middleware e Server Utils.

---

## 📘 2. TypeScript e Tipagem Estrita

O uso de TypeScript não é opcional. **Any é proibido.**

- **Interfaces/Types:** Devem ser declarados em arquivos `.ts` dentro de `types/` ou junto ao componente se forem exclusivos.
- **Props e Emits:** Sempre tipados usando `defineProps<{ ... }>()` e `defineEmits<{ ... }>()`.
- **Generics:** Utilize generics para funções e composables que lidam com dados variados.
- **Return Types:** Sempre defina explicitamente o tipo de retorno de funções complexas e services.

---

## 🧩 3. Padrão de Componentes

Componentes devem ser pequenos, focados e auto-explicativos.

- **Naming:** PascalCase (ex: `UserCard.vue`).
- **Estrutura:** 
  1. `<script setup lang="ts">` (Lógica)
  2. `<template>` (Estrutura)
  3. `<style scoped>` (Estilo)
- **Props:** Use `withDefaults` para valores padrão.
- **Slots:** Prefira slots para componentes altamente customizáveis.
- **Performance:** Use `v-if` criteriosamente e `v-show` para elementos que alternam frequência.

---

## 📄 4. Páginas e Roteamento

- **SEO First:** Cada página deve usar `useHead` ou `useSeoMeta` com títulos e descrições únicas.
- **Middleware:** Validações de acesso e redirecionamentos devem ocorrer em `middleware/`.
- **Layouts:** Use layouts para estruturas repetitivas (Header, Footer).
- **AsyncData:** Use `useAsyncData` ou `useFetch` no nível da página para garantir SSR eficiente.

---

## 🔧 5. Composables, Utils e Services

- **Composables:** Devem retornar um objeto ou array de refs/funções. Use o prefixo `use`.
- **Utils:** Funções auxiliares devem ser exportadas individualmente. Evite export default.
- **Services:** Isole a lógica de comunicação externa.
  ```typescript
  // services/api.service.ts
  export const fetchUserData = async (id: string): Promise<User> => {
    return await $fetch<User>(`/api/users/${id}`);
  };
  ```

---

## 🚀 6. Performance e Otimização

- **Hydration:** Minimize o uso de componentes que dependem puramente de client-side. Use `<ClientOnly>` onde necessário.
- **Imagens:** Utilize o módulo `@nuxt/image` para compressão e formatos modernos (WebP/Avif).
- **Lazy Loading:** Use `defineAsyncComponent` para componentes pesados fora da dobra inicial (below the fold).
- **Payload:** Utilize `pick` no `useFetch` para trazer apenas os campos necessários da API.
- **Fontes:** Use `@nuxtjs/fontaine` para evitar Layout Shift (CLS).

---

## 🔍 7. SEO e Metadados

- **Semântica:** Use HTML5 corretamente (`<main>`, `<section>`, `<article>`, `<h1>`-`<h6>`).
- **Metadata Dinâmico:** Implemente tags Open Graph e Twitter Cards.
- **JSON-LD:** Adicione dados estruturados para Rich Snippets.
- **Sitemap & Robots:** Garanta que o `nuxt-simple-sitemap` e `nuxt-simple-robots` estejam configurados.

---

## 🛡️ 8. Segurança

- **Runtime Config:** Use `useRuntimeConfig()` para chaves de API. Nunca exponha chaves privadas no client.
- **Sanitização:** Use `DOMPurify` ao renderizar `v-html`.
- **Headers:** Configure headers de segurança (CSP, X-Frame-Options) via Nitro.
- **Input Validation:** Valide dados tanto no Client (Zod/VeeValidate) quanto no Server (H3 methods).

---

## 🎨 9. UX/UI e Acessibilidade

- **Acessibilidade:** Garanta contraste adequado, suporte a navegação por teclado e atributos `aria-*`.
- **Feedback:** Sempre mostre estados de Loading e Error (Skeletons, Spinners).
- **Animações:** Use `Transition` e `TransitionGroup`. Para animações complexas, use GSAP ou CSS Transitions otimizadas.
- **Responsive:** Mobile-first sempre. Use breakpoints padrão do Tailwind.

---

## 📝 10. Checklist de Entrega

1. [ ] O código está tipado sem `any`?
2. [ ] Foram adicionados metadados de SEO?
3. [ ] O componente é acessível?
4. [ ] O uso de `useFetch` está otimizado com `pick` ou `transform`?
5. [ ] O design é responsivo e segue o design system?