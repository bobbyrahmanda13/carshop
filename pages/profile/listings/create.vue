<script setup>
definePageMeta({
  layout: "custom",
});

const { makes } = useCars();

const info = useState("testing", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    description: "",
    image: null,
  };
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};
</script>

<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create New Listing</h1>
    </div>
    {{ info.make }}
    <div class="shadow rounded p-4 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
    </div>
  </div>
</template>
