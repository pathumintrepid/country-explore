<template>
  <li :key="country.name" class="border-b border-gray-200 last:border-b-0">
    <NuxtLink :to="`/country/${country.name}`">
      <div class="block hover:bg-gray-50">
        <div class="px-4 py-4 sm:px-6 flex items-center">
          <div class="flex-shrink-0 h-10 w-10 mr-4">
            <img :src="country.flag['medium']" />
          </div>

          <div class="text-sm font-medium text-gray-900">
            {{ country.name }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
interface Country {
  name: string;
  emoji: string;
  flag: string;
}

const props = defineProps<{
  country: Country;
}>();
</script>

<style></style>
