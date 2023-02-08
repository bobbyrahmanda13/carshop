<script setup lang="ts">
const route = useRoute();
const { tittleCaseWord } = useUtilities();

useHead({
  title: `${
    route.params.make ? tittleCaseWord(route.params.make as string) : "Cars"
  } in ${tittleCaseWord(route.params.city as string)}`,
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div>
    <!-- CARS PAGE -->
    <div class="mt-32 flex">
      <CarSideBar />
      <NuxtPage />
    </div>
    <!-- CARS PAGE -->
  </div>
</template>
