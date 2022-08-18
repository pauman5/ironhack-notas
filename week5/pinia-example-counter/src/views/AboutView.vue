<template>
<div class="home">
  <h1>About</h1>
  <button class="count" @click="storeCounter.increment">{{ storeCounter.count }}</button>
</div>
</template>

<script setup>
  import { useCounterStore } from "../stores/counter";
  const storeCounter = useCounterStore();
</script>
