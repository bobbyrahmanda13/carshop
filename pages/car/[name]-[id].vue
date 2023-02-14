<script setup lang="ts">
const route = useRoute();
const { cars } = useCars();
const { titleCaseWord } = useUtilities();

useHead({
  title: titleCaseWord(route.params.name as string),
});
const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(route.params.id as string);
  });
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>
