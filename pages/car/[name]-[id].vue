<script setup lang="ts">
const route = useRoute();
const { titleCaseWord } = useUtilities();

useHead({
  title: titleCaseWord(route.params.name as string),
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
