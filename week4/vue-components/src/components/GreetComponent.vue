<template>
  <h1>Hello {{ name }} a.k.a {{ lastName }}</h1>
</template>

<script>
export default {
    name: "GreetComponent",
    data() {
        return {}
    },
    methods: {},
    computed: {},
    props: ["name","lastName"],
}
</script>

<style>

</style>