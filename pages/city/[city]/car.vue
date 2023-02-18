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
      <CarSideBar />
      <NuxtPage />
    </div>
    <!-- CARS PAGE -->
  </div>
</template>
