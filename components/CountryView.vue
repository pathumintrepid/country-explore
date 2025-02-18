<template>
  <div class="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div
      class="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div class="md:flex px-8 py-6">
        <div class="md:flex-shrink-0">
          <img
            class="h-48 w-full object-contain md:w-48"
            :src="country.flag['large']"
            alt="Flag of the United
          States"
          />
        </div>
        <div class="p-8">
          <div
            class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
          >
            Country Details
          </div>
          <h1 class="block mt-1 text-3xl leading-tight font-bold text-black">
            {{ country.name }}
          </h1>
          <p class="mt-2 text-gray-500">
            {{ country.official_name }}
          </p>
        </div>
      </div>
      <div class="px-8 py-6">
        <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Calling Code</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ country.callingCode }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Capital</dt>
            <dd class="mt-1 text-sm text-gray-900">{{ country.capital }}</dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Region</dt>
            <dd class="mt-1 text-sm text-gray-900">{{ country.region }}</dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Population</dt>
            <dd class="mt-1 text-sm text-gray-900">{{ country.population }}</dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Coordinates</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ country.latLng.country.join(",") }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Area</dt>
            <dd class="mt-1 text-sm text-gray-900">{{ country.area }}</dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Currency</dt>
            <dd class="mt-1 text-sm text-gray-900">{{ country.currencies }}</dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Language</dt>
            <dd class="mt-1 text-sm text-gray-900">{{ country.languages }}</dd>
          </div>
        </dl>
      </div>

      <div class="px-8 py-6 bg-gray-50">
        <NuxtLink
          to="/"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          ← Back to Countries
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

// get the country name from the route params
const route = useRoute();
const countryName = route.params.name;
console.log("countryName", countryName);
const COUNTRY_API_KEY = useRuntimeConfig().public.countryAPI;

const country = useState("country", () => {});

const { data, error } = useFetch(
  `https://countryapi.io/api/name/${countryName}`,
  {
    headers: {
      Authorization: `Bearer ${COUNTRY_API_KEY}`,
    },
  }
);
console.log("country data", toRaw(data.value));
console.log("country error", error.value);
const rawData = toRaw(data.value);
const firstKey = Object.keys(rawData)[0];
country.value = rawData[firstKey];
</script>

<style></style>
