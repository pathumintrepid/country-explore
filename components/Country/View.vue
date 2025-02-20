<template>
  <CountryCardBase>
    <CountryCardHeader
      :name="name"
      :flagURL="flag['large']"
      :official_name="official_name"
    />
    <CountryCardDetails
      :callingCode="callingCode"
      :capital="capital"
      :region="region"
      :population="population"
      :latLng="latLng"
      :area="area"
      :currencies="currencies"
      :languages="languages"
    />
    <ButtonBackToContries />
  </CountryCardBase>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import type { Country } from "~/types/country";

const { params } = useRoute();
const { name: CountryName } = params;

const country = useState<Country | null>("country", () => null);
const data = await useCountryAPI(`name/${CountryName}`);

const firstKey = Object.keys(data as object)[0];
country.value = (data as Record<string, any>)[firstKey];
const {
  flag,
  name,
  official_name,
  callingCode,
  capital,
  region,
  population,
  latLng,
  area,
  currencies,
  languages,
} = country.value!;
</script>
