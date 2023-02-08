<script setup lang="ts">
const route = useRoute();
const { tittleCaseWord } = useUtilities();

useHead({
  title: tittleCaseWord(route.params.name as string),
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div>
    <CarDetailHero />
    <CarDetailAttributes />
    <CarDetailDescription />
    <CarDetailContact />
  </div>
</template>
