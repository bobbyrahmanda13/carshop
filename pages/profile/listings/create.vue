<script setup>
definePageMeta({
  layout: "custom",
});

const { makes } = useCars();

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: null,
  };
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Test",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2023",
  },
  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "100",
  },
  {
    id: 4,
    title: "City *",
    name: "city",
    placeholder: "Jakarta",
  },
  {
    id: 5,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "10",
  },
  {
    id: 6,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interrior, No Accidents",
  },
];
</script>

<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create New Listing</h1>
    </div>
    <!-- {{ info.make }} -->
    <!-- {{ info.year }} -->
    <!-- {{ info.model }} -->
    <div class="shadow rounded p-4 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <CarAdTextarea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      />
    </div>
  </div>
</template>
