<script setup lang="ts">
const route = useRoute();

useHead({
  title: `${
    route.params.make ? titleCaseWord(route.params.make as string) : "Cars"
  } in ${titleCaseWord(route.params.city as string)}`,
});
// function toTitleCase untuk membuat title huruf awalnya jadi huruf besar
// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, function (txt: string) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1);
//   });
// }

// function titleCaseWord untuk membuat title huruf awalnya jadi huruf besar
function titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
</script>
<template>
  <div>
    <NavBar />
    <!-- CARS PAGE -->
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <div class="mt-32 flex">
        <CarSideBar />
        <NuxtPage />
      </div>
    </div>
    <!-- CARS PAGE -->
  </div>
</template>
