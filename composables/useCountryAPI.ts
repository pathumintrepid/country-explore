export const useCountryAPI = async (path: string) => {
  const config = useRuntimeConfig();
  const apiKey = config.public.countryAPI;

  const { data } = await useFetch(`https://countryapi.io/api/${path}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return toRaw(data.value);
};
