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
  1. `<script setup lang="ts" lang="ts">` (Lógica)
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

## 🎨 9. UX/UI, Design System e Acessibilidade

- **Cores e Padrões (Design System):** A criação de layouts e componentes **deve rigorosamente** seguir a paleta de cores do projeto (como `burgundy`, `teal` e `slate/tertiary`) e os padrões visuais estabelecidos (ex: estética premium, glassmorphism, gradientes suaves). Evite inventar estilos fora da identidade visual da marca.
- **Responsividade Integral (Mobile First):** Adote a abordagem **Mobile First** como regra absoluta. Comece pela versão mobile e use os breakpoints do Tailwind (`sm:`, `md:`, `lg:`, `xl:`) para adaptar. **É obrigatório que todos os elementos** da interface — incluindo textos (tipografia fluida ou ajustável), imagens, botões, containers de grid/flex (linhas e colunas) e tabelas — sejam construídos de forma a se readequarem harmoniosamente e não quebrarem em nenhum tamanho de tela.
- **Acessibilidade:** Garanta contraste adequado, suporte a navegação por teclado e atributos `aria-*`.
- **Feedback:** Sempre mostre estados de Loading e Error (Skeletons, Spinners).
- **Animações:** Use `Transition` e `TransitionGroup`. Para animações complexas, use GSAP ou CSS Transitions otimizadas.

---

## 📝 10. Checklist de Entrega

1. [ ] O código está tipado sem `any`?
2. [ ] Foram adicionados metadados de SEO?
3. [ ] O componente é acessível?
4. [ ] O uso de `useFetch` está otimizado com `pick` ou `transform`?
5. [ ] O design é responsivo e segue o design system?

---

## 💎 11. Padrões de Componentes Premium e Layouts Avançados

O projeto utiliza um padrão estrito para layouts premium, extraído de componentes chave (`ServiceHero`, `VaccineHomeBenefits`, `LabExamsHomeBenefits`, `VaccineListSection`, `ServiceVaccineTable` e `LabExamsListSection`). Ao criar novos componentes ou refatorar páginas, aplique as seguintes regras arquiteturais e visuais:

### 11.1. Estrutura de Seção e Container
- **Seções Base:** Use a tag `<section>` com padding vertical (ex: `py-12 md:py-24`), fundo limpo (`bg-white`) ou cores da paleta (`bg-burgundy-900`, `bg-slate-50`) e `relative` para permitir decorações absolutas. Sempre inclua `aria-labelledby` apontando para o `id` do título da seção.
- **Container Central:** Todo conteúdo deve estar envolto em `<div class="main-container mx-auto px-6 md:px-12 relative z-10">`.
- **Aviso sobre `overflow-hidden`:** NUNCA use `overflow-hidden` na `<section>` pai se a página contiver colunas laterais ou componentes utilizando `position: sticky`. O `overflow-hidden` na raiz transforma o elemento em contexto de rolagem, "quebrando" o sticky com o scroll da página global.

### 11.2. Decorações de Fundo (Background Decors)
Seções premium utilizam orbs sutis de cor para criar profundidade sem distrair:
- **Container:** `<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">`.
- **Orbs:** Duas esferas posicionadas em cantos opostos da seção, usando cores da marca com opacidade muito baixa:
  ```html
  <div class="absolute -right-[10%] top-[15%] w-[30rem] h-[30rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
  <div class="absolute -left-[10%] bottom-[5%] w-[25rem] h-[25rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
  ```
- **Regras:** Use `blur-[120px]` (não mais), opacidade `/5` e tamanhos entre `w-[20rem]` e `w-[30rem]`. Posicione com offsets negativos (`-right-[10%]`, `-left-[10%]`).

### 11.3. Cabeçalho de Seção (Section Header)
Todas as seções de conteúdo seguem uma anatomia de header centralizada e consistente:
```html
<div v-animate-on-scroll class="text-center max-w-4xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
  <!-- Badge -->
  <div class="inline-flex items-center gap-2 text-[cor]-800 font-bold bg-[cor]-50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-[cor]-100">
    <Icon name="ph:icon-fill" size="18" aria-hidden="true" />
    <span class="text-xs sm:text-sm uppercase tracking-widest">Texto do Badge</span>
  </div>
  <!-- Título -->
  <h2 class="text-3xl md:text-5xl font-bold font-headline-lg text-tertiary mb-10 leading-tight">
    Texto base <span class="text-[cor]-700">Destaque</span>
  </h2>
  <!-- Descrição -->
  <p class="text-lg md:text-xl text-on-tertiary-fixed-variant max-w-2xl leading-relaxed">
    Descrição complementar.
  </p>
</div>
```
- **Badge:** `text-xs sm:text-sm uppercase tracking-widest` dentro de pill com borda e backdrop-blur.
- **Título:** `text-3xl md:text-5xl font-bold` com destaque colorido via `<span class="text-[cor]-700">` (cor sólida, evite gradient clip-text em seções internas).
- **Descrição:** `text-lg md:text-xl` com `max-w-2xl` para controle de largura de leitura.

### 11.4. Transições entre Tabs (Tab Content Transitions)
Ao alternar conteúdo via Tabs, use sempre `<Transition>` com fade + slide vertical:
```html
<div class="relative mt-10 md:mt-14 min-h-[300px]">
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-8"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-300 ease-in absolute inset-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-8"
  >
    <div :key="activeCategory">
      <!-- Conteúdo dinâmico -->
    </div>
  </Transition>
</div>
```
- **`min-h-[300px]` ou `min-h-[400px]`:** Evita colapso de altura durante a transição.
- **`absolute inset-0` no leave:** Retira o elemento que sai do fluxo, permitindo overlap suave.

### 11.5. Efeito Sticky Scroll em Colunas Duplas
Para diagramar uma seção com uma coluna longa de texto e uma menor acompanhando lateralmente via scroll:
- **Flex Container:** O invólucro direto deve ser `<div class="flex flex-col lg:flex-row gap-16 lg:gap-24">`. DEIXE com o alinhamento padrão (`align-items: stretch`). Se utilizar `items-start`, o sticky perderá a altura total como pista de rolagem.
- **Isolamento de Estado (Crucial):** A marcação DEVE ser separada em níveis para que diretivas de entrada em cena (`v-animate-on-scroll`) não cancelem a propriedade sticky. O CSS `transform` invalida o `position: sticky` se colocados no mesmo elemento. Siga essa anatomia exata:
  ```html
  <!-- Coluna Direita (Exemplo) -->
  <div class="lg:w-1/2 w-full">
    <!-- 1. Envoltório do fixo: Lida com a posição na tela -->
    <div class="lg:sticky lg:top-32">
      <!-- 2. Envoltório da animação/render: Executa entrada e transforma visualmente -->
      <div v-animate-on-scroll="'200ms'" class="relative">
        <!-- Seu Cartão Premium ou Imagem -->
      </div>
    </div>
  </div>
  ```

### 11.6. Cartões Grid (Full-Width Sections)
Para seções com cards em grid (ex: `VaccineListSection`, `LabExamsListSection`):
- **Grid Responsivo:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8` (ou `lg:grid-cols-3` para 3 colunas).
- **Card Base:** `group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full`.
- **Hover Glow:** Div absoluto no canto superior direito: `absolute top-0 right-0 w-32 h-32 bg-[cor]-50/50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500`.
- **Célula de Ícone:** `w-14 h-14 bg-[cor]-50 border border-[cor]-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm shrink-0` com hover: `group-hover:bg-[cor]-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`.
- **Footer Decoration:** `mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-[cor]-200 group-hover:text-[cor]-500 transition-colors duration-300`.

### 11.7. Rows Numeradas (Table/Schedule Sections)
Para listas estilo tabela com numeração (ex: `ServiceVaccineTable`):
- **Row Base:** `group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-burgundy-100 hover:-translate-y-0.5 transition-all duration-300 gap-4 relative overflow-hidden`.
- **Célula Numérica:** `w-10 h-10 rounded-xl bg-[cor]-50 border border-[cor]-100 flex items-center justify-center shrink-0` com texto `text-sm font-black text-[cor]-700` e hover invertido: `group-hover:bg-[cor]-700 group-hover:text-white group-hover:scale-110`.
- **Badge de Metadado:** Pill à direita com ícone contextual: `flex items-center gap-2 text-sm font-bold text-[cor]-800 bg-[cor]-50 px-5 py-2 rounded-full border border-[cor]-100/50 shrink-0`.

### 11.8. Trust Strip (Faixa de Confiança)
Barra horizontal de logos/marcas parceiras no rodapé de seções:
```html
<div v-animate-on-scroll="'300ms'" class="mt-16 md:mt-24 pt-10 border-t border-slate-100 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
  <div class="group flex items-center gap-3 bg-white/70 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[cor]-100 transition-all duration-300">
    <Icon :name="brand.icon" size="22" class="text-[cor]-600 group-hover:scale-110 transition-transform duration-300" />
    <span class="text-sm font-bold text-slate-700">{{ brand.name }}</span>
  </div>
</div>
```

### 11.9. Info Callout (Chamada Informativa)
Bloco informativo de destaque no rodapé de seções:
- **Container:** `p-8 md:p-10 rounded-[2.5rem] bg-[cor]-50/50 border border-[cor]-100 backdrop-blur-sm relative overflow-hidden group`.
- **Decoração:** Div absoluto com `bg-[cor]-200/20 rounded-full blur-3xl group-hover:bg-[cor]-200/40 transition-colors duration-500`.
- **Layout interno:** `flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left` com célula de ícone (`w-14 h-14 bg-[cor]-100 rounded-2xl`) que faz `group-hover:scale-110 group-hover:rotate-3`.

### 11.10. Cartões, Containers de Ícone e Interações (Hover) — Resumo
- **Design de Cards:** Bordas pronunciadas (`rounded-[2rem]` a `rounded-[4rem]`), padding imersivo (`p-8 md:p-12`), sombras dependendo da profundidade (`shadow-sm` → `hover:shadow-2xl`) e bordas finas (`border border-slate-100` ou `border-[cor]-100`).
- **Células de Ícone:** Padrão consistente: `<div class="w-14 h-14 rounded-2xl bg-[cor]-50 border border-[cor]-100 flex items-center justify-center shrink-0 shadow-sm">`.
- **Micro-Interações:** Use `group` para feedbacks interativos coesos. Combine: `group-hover:scale-110`, `group-hover:rotate-3`, `group-hover:bg-[cor]-700`, `group-hover:text-white`, com `transition-all duration-300` ou `duration-500`.

---

## 🎨 12. Anatomia de Estilos: `VaccineHomeBenefits.vue` (Referência Visual)

Este componente é a referência para seções de benefícios com colunas assimétricas e "sticky content". Siga estes padrões para manter a consistência visual:

### 12.1. Estrutura e Espaçamento
- **Seção:** `py-12 md:py-24 bg-white` - Uso de branco puro para maximizar a clareza.
- **Layout:** `flex flex-col lg:flex-row gap-16 lg:gap-24` - Espaçamento largo entre colunas para evitar poluição visual.

### 12.2. Tokens de Cor (Tema Teal)
- **Badges/Pills:** `text-teal-700` | `bg-teal-50` | `border-teal-100`.
- **Destaques:** `text-teal-600` (usado em palavras-chave dentro de títulos).
- **Ícones:** `text-teal-700` dentro de containers `bg-teal-50`.

### 12.3. Componentes de Lista (Benefícios)
- **Container de Ícone:** `w-14 h-14 rounded-2xl bg-teal-50 shadow-sm border border-teal-100`.
- **Interação:** `group-hover:scale-110 transition-transform duration-300`.
- **Tipografia:** 
  - Título: `font-bold text-tertiary text-xl`.
  - Descrição: `text-on-tertiary-fixed-variant leading-relaxed`.

### 12.4. Card Premium (Sticky/Testimonial)
- **Geometria:** `rounded-[4rem]` - Bordas arredondadas orgânicas.
- **Profundidade:** `shadow-xl` | `border border-teal-100`.
- **Elemento Decorativo (Shadow Card):** Um `div` absoluto com `bg-teal-600/5`, `rounded-[4rem]`, `rotate-3` e `scale-105` posicionado atrás do card principal.
- **Conteúdo Interno:** 
  - Padding: `p-8 md:p-12`.
  - Citações: `text-lg italic text-on-tertiary-fixed-variant`.
  - Assinatura: Border top tracejado (`border-t border-teal-50 border-dashed`).

### 12.5. Sticky Behavior
- **Configuração:** `lg:sticky lg:top-32` aplicado a um wrapper interno para não quebrar animações de entrada (`v-animate-on-scroll`).

---

## 🧩 13. Anatomia do Componente `Tabs.vue` (UI Library)

**Localização:** `libs/ui/components/tabs/Tabs.vue`

Componente reutilizável de abas com indicador animado deslizante. Referência obrigatória para navegação por abas em todo o projeto.

### 13.1. Visual e Estrutura
- **Container:** `<nav>` com `role="tablist"`, estilo pill glassmorphism: `bg-slate-100/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/60 shadow-sm`.
- **Responsividade:** `w-full md:w-auto` — ocupa toda a largura no mobile, auto no desktop. Botões usam `flex-1 md:flex-none`.
- **Indicador Animado:** Div absoluto (`z-0`) com `bg-white rounded-xl shadow-md border border-slate-200/40`. Posição e largura calculadas via JavaScript (`offsetLeft`, `offsetWidth`), com `transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]`.

### 13.2. API
- **Props:** `modelValue: string`, `tabs: Tab[]`, `ariaLabel?: string` (default: `'Navegação por abas'`).
- **Emits:** `update:modelValue` (tipado).
- **Slot:** `#default="{ activeTab }"` — passa a aba ativa para conteúdo interno. Renderizado condicionalmente com `v-if="$slots.default"`.
- **Interface Tab:** `{ label: string, value: string, icon?: string }`.

### 13.3. Acessibilidade
- `role="tablist"` no container, `role="tab"` nos botões.
- `aria-selected`, `aria-controls`, `id` únicos por aba.
- `focus-visible:ring-2 focus-visible:ring-burgundy-400 focus-visible:ring-offset-2`.

### 13.4. Cores do Estado Ativo/Inativo
- **Ativo:** `text-burgundy-800` (texto), `text-burgundy-700` (ícone).
- **Inativo:** `text-slate-400 hover:text-slate-600`.

### 13.5. Uso Correto
```html
<!-- Sem slot (conteúdo gerenciado externamente com Transition) -->
<Tabs v-model="activeCategory" :tabs="[...]" />

<!-- Com slot (conteúdo dentro do Tabs) -->
<Tabs v-model="activeCategory" :tabs="[...]">
  <template #default="{ activeTab }">
    <div v-if="activeTab === 'value'">...</div>
  </template>
</Tabs>
```

---

## 🎨 14. Tokens de Cor por Contexto (Tema Burgundy vs Teal)

O projeto utiliza dois temas de cor dependendo do contexto da seção:

### 14.1. Tema Burgundy (Vacinas, Proteção, Ação)
- **Badge:** `text-burgundy-800` | `bg-burgundy-50` | `border-burgundy-100`.
- **Destaques em título:** `text-burgundy-700`.
- **Ícones:** `text-burgundy-700` dentro de containers `bg-burgundy-50 border border-burgundy-100`.
- **Hover invertido:** `group-hover:bg-burgundy-700 group-hover:text-white`.
- **Pills/Badges metadado:** `text-burgundy-800 bg-burgundy-50 border border-burgundy-100/50`.
- **Componentes:** `VaccineListSection`, `ServiceVaccineTable`.

### 14.2. Tema Teal (Diagnóstico, Saúde, Benefícios)
- **Badge:** `text-teal-800` | `bg-teal-50/50` | `border-teal-100`.
- **Destaques em título:** `text-teal-600` ou `text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400`.
- **Ícones:** `text-teal-600` ou `text-teal-700` dentro de containers `bg-slate-50 border border-slate-100 shadow-inner` (ou `bg-teal-50`).
- **Hover invertido:** `group-hover:bg-teal-600 group-hover:text-white`.
- **Componentes:** `LabExamsListSection`, `VaccineHomeBenefits`, `LabExamsHomeBenefits`.

### 14.3. Flexibilidade e Intercalação de Cores
- **Intercalação:** É permitido (e encorajado para dinamismo visual) intercalar elementos dos dois temas na mesma seção. Por exemplo, usar um badge Teal em uma seção predominantemente Burgundy para destacar um "Diferencial" ou "Benefício".
- **Cores de Fundo:** Além do `bg-white`, as seções podem utilizar cores sólidas da paleta para criar blocos de contraste:
  - **Dark Mode Section:** `bg-burgundy-900` ou `bg-teal-900` com texto em `white` ou variantes claras (`burgundy-50`).
  - **Subtle Background:** `bg-slate-50`, `bg-burgundy-50/40` ou `bg-teal-50/30` para separar conteúdos visualmente sem o peso das cores escuras.
- **Atenção à Acessibilidade:** Ao usar fundos coloridos, certifique-se de que o contraste do texto atenda aos padrões WCAG.