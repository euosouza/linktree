<template>
  <div class="w-full flex flex-col items-center">
    <!-- Premium Pill Tabs -->
    <nav
      class="relative inline-flex items-center bg-slate-100/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/60 shadow-sm w-full md:w-auto"
      role="tablist"
      :aria-label="ariaLabel"
    >
      <!-- Animated Sliding Indicator -->
      <div
        ref="indicatorRef"
        class="absolute top-1.5 left-0 h-[calc(100%-0.75rem)] bg-white rounded-xl shadow-md border border-slate-200/40 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none z-0"
        :style="indicatorStyle"
        aria-hidden="true"
      ></div>

      <button
        v-for="(tab, index) in tabs"
        :key="tab.value"
        :ref="(el) => setTabRef(el as HTMLElement, index)"
        role="tab"
        :aria-selected="modelValue === tab.value"
        :aria-controls="`tabpanel-${tab.value}`"
        :id="`tab-${tab.value}`"
        @click="$emit('update:modelValue', tab.value)"
        class="
          relative z-10
          flex-1 md:flex-none
          flex items-center justify-center gap-2
          px-5 py-2.5 md:px-8 md:py-3
          font-bold text-xs sm:text-sm
          rounded-xl
          transition-colors duration-300
          whitespace-nowrap
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-400 focus-visible:ring-offset-2
          cursor-pointer select-none
        "
        :class="modelValue === tab.value
          ? 'text-burgundy-800'
          : 'text-slate-400 hover:text-slate-600'"
      >
        <Icon
          v-if="tab.icon"
          :name="tab.icon"
          :size="16"
          class="shrink-0 transition-colors duration-300"
          :class="modelValue === tab.value ? 'text-burgundy-700' : 'text-slate-400'"
        />
        <span>{{ tab.label }}</span>
      </button>
    </nav>

    <!-- Content Slot -->
    <div v-if="$slots.default" class="w-full" role="tabpanel">
      <slot :active-tab="modelValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tab {
  label: string
  value: string
  icon?: string
}

interface TabsProps {
  modelValue: string
  tabs: Tab[]
  ariaLabel?: string
}

const props = withDefaults(defineProps<TabsProps>(), {
  ariaLabel: 'Navegação por abas'
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

const tabRefs = ref<(HTMLElement | null)[]>([])
const indicatorStyle = ref<Record<string, string>>({})

function setTabRef(el: HTMLElement | null, index: number) {
  if (tabRefs.value) {
    tabRefs.value[index] = el
  }
}

function updateIndicator() {
  const activeIndex = props.tabs.findIndex(t => t.value === props.modelValue)
  const activeEl = tabRefs.value[activeIndex]

  if (activeEl) {
    indicatorStyle.value = {
      width: `${activeEl.offsetWidth}px`,
      transform: `translateX(${activeEl.offsetLeft - 6}px)`,
    }
  }
}

watch(() => props.modelValue, () => {
  nextTick(updateIndicator)
})

onMounted(() => {
  nextTick(updateIndicator)

  // Recalculate on resize for responsive accuracy
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateIndicator)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateIndicator)
  }
})
</script>
