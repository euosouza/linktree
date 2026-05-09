<template>
  <div class="w-full flex flex-col items-center">
    <!-- Simple Underline Tabs -->
    <div class="flex w-full md:w-auto border-b border-slate-200 mb-10 md:mb-16">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        @click="$emit('update:modelValue', tab.value)"
        class="
          flex-1 md:flex-none
          flex items-center justify-center gap-2
          px-6 py-3 md:px-10 md:py-4
          font-bold text-sm md:text-base
          transition-all duration-200
          -mb-px border-b-2
          whitespace-nowrap
          focus-visible:outline-none
        "
        :class="modelValue === tab.value
          ? 'border-burgundy-700 text-burgundy-800'
          : 'border-transparent text-slate-400 hover:text-slate-700 hover:border-slate-300'"
      >
        <Icon
          v-if="tab.icon"
          :name="tab.icon"
          :size="16"
          class="shrink-0"
          :class="modelValue === tab.value ? 'text-burgundy-700' : 'text-slate-400'"
        />
        {{ tab.label }}
      </button>
    </div>

    <div class="w-full">
      <slot :active-tab="modelValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  tabs: { label: string, value: string, icon?: string }[]
}>()

defineEmits(['update:modelValue'])
</script>
