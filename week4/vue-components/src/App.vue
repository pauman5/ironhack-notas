<template>
  <h1>Props Class</h1>
  <!-- <Greet name="Jarko" lastName="Garrido"/>
  <Greet name="Aleix" lastName="Abuli"/>
  <Greet name="Pauman" lastName="Ibañez"/>
  <Greet name="name" lastName="lastName"/> -->
  <AricleComponent 
    title="Wu Tang Clan Will never die" 
    :likes="200" 
    :isPublished="true"
    id="my-article"
    />
</template>

<script>
import AricleComponent from "./components/AricleComponent.vue";
// import Greet from './components/Greet.vue';

export default {
  name: 'App',
  components: {
    AricleComponent
},
    data() {
      return {
        name: "Gustavo",
        lastName: "Cerati",
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
