<template>
  <div class="mt-6 text-center">
    <button
      @click="triggerIncrement"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      See More 🌍
    </button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits();

const triggerIncrement = () => {
  emit("increment");
};
</script>
