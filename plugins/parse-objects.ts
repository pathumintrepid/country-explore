export default defineNuxtPlugin(() => {
  return {
    provide: {
      getJoinedKeys: (keys: Object) => {
        const keysArray = Object.keys(keys);
        return keysArray.join(", ");
      },
      getJoinedValues: (keys: Object) => {
        const valuesArray = Object.values(keys);
        return valuesArray.join(", ");
      },
    },
  };
});
