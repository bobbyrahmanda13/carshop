<script setup>
const route = useRoute();
const { titleCaseWord } = useUtilities();

useHead({
  title: `${
    route.params.make ? titleCaseWord(route.params.make) : "Cars"
  } in ${titleCaseWord(route.params.city)}`,
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div>
    <!-- CARS PAGE -->
    <div class="mt-32 flex">
      <NuxtErrorBoundary>
        <CarSideBar />
        <NuxtPage />
        <template #error="{ error }">
          <div class="text-center mx-auto flex flex-col">
            <h1 class="text-5xl text-red-600 mb-4">
              Sorry, something went wrong
            </h1>
            <code>{{ error }}</code>
            <button
              @click="error.value = null"
              class="text-white bg-blue-400 px-10 py-4 rounded mt-4"
            >
              Go Back
            </button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
    <!-- CARS PAGE -->
  </div>
</template>
