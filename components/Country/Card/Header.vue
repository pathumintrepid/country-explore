<template>
  <div class="md:flex px-8 py-6">
    <div class="md:flex-shrink-0">
      <img
        class="h-48 w-full object-contain md:w-48"
        :src="flagURL"
        :alt="`Flag of {{ name }}`"
      />
    </div>
    <div class="p-8">
      <div
        class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
      >
        Country Details
      </div>
      <h1
        class="block mt-1 text-3xl leading-tight font-bold text-black"
        data-cy="name"
      >
        {{ name }}
      </h1>
      <p class="mt-2 text-gray-500" data-cy="official_name">
        {{ official_name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CountryHeader } from "~/types/country";
defineProps<CountryHeader>();
</script>
