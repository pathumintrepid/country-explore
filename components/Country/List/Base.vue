<template>
  <div class="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1
        class="text-3xl font-bold text-center text-gray-900 mb-8"
        data-cy="home-page-tagline"
      >
        Explore the world
      </h1>

      <ul class="bg-white shadow overflow-hidden sm:rounded-md">
        <CountryListItem
          v-for="country in visibleCountries"
          :country="country"
        />
      </ul>

      <ButtonSeeMore
        @increment="incrementVisibleCountries"
        v-if="visibleCountries.length < countries.length"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const countries = useState("countries", () => []);
const visibleCount = useState("visibleCount", () => 10);

const data = await useCountryAPI("all");
countries.value = Object.values(data);

const visibleCountries = computed(() => {
  return countries.value.slice(0, visibleCount.value);
});

const incrementVisibleCountries = () => {
  visibleCount.value += 10;
};
</script>
