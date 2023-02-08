<script setup lang="ts">
const route = useRoute();
useHead({
  title: titleCaseWord(route.params.name as string),
});
definePageMeta({
  layout: "custom",
});

function titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
</script>
<template>
  <div>
    <CarDetailHero />
    <CarDetailAttributes />
    <CarDetailDescription />
    <CarDetailContact />
  </div>
</template>
