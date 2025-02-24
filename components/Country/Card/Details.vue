<template>
  <div class="px-8 py-6">
    <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
      <div class="sm:col-span-1">
        <dt class="text-sm font-medium text-gray-500">Calling Code</dt>
        <dd class="mt-1 text-sm text-gray-900" data-cy="calling-code">
          {{ callingCode }}
        </dd>
      </div>
      <div class="sm:col-span-1">
        <dt class="text-sm font-medium text-gray-500">Capital</dt>
        <dd class="mt-1 text-sm text-gray-900" data-cy="capital">
          {{ capital }}
        </dd>
      </div>
      <div class="sm:col-span-1">
        <dt class="text-sm font-medium text-gray-500">Region</dt>
        <dd class="mt-1 text-sm text-gray-900" data-cy="region">
          {{ region }}
        </dd>
      </div>
      <div class="sm:col-span-1">
        <dt class="text-sm font-medium text-gray-500">Population</dt>
        <dd class="mt-1 text-sm text-gray-900" data-cy="population">
          {{ population }}
        </dd>
      </div>
      <div class="sm:col-span-1">
        <dt class="text-sm font-medium text-gray-500">Coordinates</dt>
        <dd class="mt-1 text-sm text-gray-900" data-cy="coordinates">
          {{ latLng.country.join(",") }}
        </dd>
      </div>
      <div class="sm:col-span-1">
        <dt class="text-sm font-medium text-gray-500">Area</dt>
        <dd class="mt-1 text-sm text-gray-900" data-cy="area">
          {{ area }} km<sup>2</sup>
        </dd>
      </div>
      <div class="sm:col-span-1">
        <dt class="text-sm font-medium text-gray-500">Currency</dt>
        <dd class="mt-1 text-sm text-gray-900" data-cy="currencies">
          {{ $getJoinedKeys(currencies) }}
        </dd>
      </div>
      <div class="sm:col-span-1">
        <dt class="text-sm font-medium text-gray-500">Language</dt>
        <dd class="mt-1 text-sm text-gray-900" data-cy="languages">
          {{ $getJoinedValues(languages) }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import type { CountryDetails } from "~/types/country";

defineProps<CountryDetails>();
</script>
