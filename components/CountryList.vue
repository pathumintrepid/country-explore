<template>
  <div class="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold text-center text-gray-900 mb-8">
        Country Explorer 🌎
      </h1>
      <ul class="bg-white shadow overflow-hidden sm:rounded-md">
        <CountryListItem v-for="country in countries" :country="country" />
      </ul>
      <SeeMore />
    </div>
  </div>
</template>

<script lang="ts" setup>
const COUNTRY_API_KEY = useRuntimeConfig().public.countryAPI;

const countries = useState("countries", () => []);
const { data } = await useFetch("https://countryapi.io/api/all", {
  headers: {
    Authorization: `Bearer ${COUNTRY_API_KEY}`,
  },
});

countries.value = toRaw(data.value);
</script>

<style></style>
