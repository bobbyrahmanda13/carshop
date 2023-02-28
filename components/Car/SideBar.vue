<script setup>
const { makes } = useCars();

const modal = ref({
  make: false,
  location: false,
  price: false,
});

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};
const city = ref("");
const route = useRoute();

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({ statusCode: 400, message: "Invalid city format" });
  }

  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
};

const onChangeMake = (make) => {
  updateModal("make");
  // console.log(make);
  navigateTo(`/city/${route.params.city}/car/${make}`);
};
</script>

<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <!-- Location start -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 @click="updateModal('location')" class="text-blue-400 capitalize">
        {{ route.params.city }}
      </h3>
      <div
        v-if="modal.location"
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
      >
        <input type="text" class="border p-1 rounded" v-model="city" />
        <button
          @click="onChangeLocation"
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
        >
          Apply
        </button>
      </div>
    </div>
    <!-- location end -->
    <!-- make start -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 @click="updateModal('make')" class="text-blue-400 capitalize">
        {{ route.params.make || "Any" }}
      </h3>
      <div
        class="absolute border shadow left-56 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white"
        v-if="modal.make"
      >
        <h4
          v-for="make in makes"
          :key="make"
          class="w-1/3"
          @click="onChangeMake(make)"
        >
          {{ make }}
        </h4>
      </div>
    </div>
    <!-- make end -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize"></h3>
    </div>
  </div>
</template>
