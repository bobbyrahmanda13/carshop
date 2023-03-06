<script setup>
definePageMeta({
  layout: "custom",
});

const { makes } = useCars();
</script>

<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create New Listing</h1>
    </div>
    <div class="shadow rounded p-4 mt-5 flex flex-wrap justify-between">
      <CarAdSelect title="Make *" :options="makes" />
    </div>
  </div>
</template>
