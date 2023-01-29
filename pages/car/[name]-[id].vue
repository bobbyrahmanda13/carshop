<script setup lang="ts">
const route = useRoute();
useHead({
  title: titleCaseWord(route.params.name as string),
});
function titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
</script>
<template>
  <div>
    <NavBar />

    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <CarDetailHero />
      <CarDetailAttributes />
      <CarDetailDescription />
      <CarDetailContact />
    </div>
  </div>
</template>
