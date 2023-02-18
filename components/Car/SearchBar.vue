<script setup>
const city = ref("");
const cityError = ref(false);
// const router = useRouter(); => menggunakan useRouter composable default vue 3

const handleSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }
  navigateTo(`/city/${city.value}/car`); // => routing bawaan nuxt 3
  // router.push(`/city/${city.value}/car`); => menggunakan lanjutan dari useRouter
};
</script>

<template>
  <!-- HOME SEARCH BAR -->
  <div
    class="font-serif w-100 text-2xl rounded-full bg-white flex justiry-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      :class="cityError ? 'border-red-500 border' : ''"
      placeholder="Search by city... "
      v-model="city"
    />
    <button class="bg-sky-500 px-10 text-white" @click="handleSearch">
      Search
    </button>
  </div>
  <!-- HOME SEARCH BAR -->
</template>
