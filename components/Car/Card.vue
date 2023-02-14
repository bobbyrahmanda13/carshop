<script setup lang="ts">
interface Car {
  id: number;
  url: string;
  name: string;
  description: string;
  price: string;
}
const props = defineProps<{
  car: Car;
}>();
</script>

<template>
  <div
    @click="navigateTo(`/car/${car.name}-${car.id}`)"
    class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <div class="flex h-full">
      <img :src="car.url" alt="" class="w-[200px] h-full" />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <p class="text-gray-700">
            {{ car.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">{{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>
