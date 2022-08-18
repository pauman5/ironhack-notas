<template>
  <div class="home">
    <h1>Home</h1>
    <div class="count">{{ storeCounter.count }}</div>
    <div class="buttons">
      <button @click="storeCounter.decrement">-</button>
      <button @click="storeCounter.increment">+</button>
    </div>
    <p>This is an {{ storeCounter.oddOrEven }} number</p>
  </div>
</template>

<script setup>
// import { computed, ref } from "vue";
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();

// const count = ref(0);
// const increaseCount = () => {
//   count.value++;
// }
// const decreaseCount = () => {
//   count.value--;
// }
// const oddOrEven = computed (() => {
//   if(count.value % 2 === 0) return "Even"
//   else return "Odd"
// });
</script>
