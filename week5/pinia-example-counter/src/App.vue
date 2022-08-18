<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <RouterView />
  </header>
</template>

<style>

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.count {
  padding: 1rem 2rem;
  margin: 1rem;
  border: 1px black solid;
  border-radius: 0.5rem;
  font-size: 3rem;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.buttons button {
   padding: 0.5rem;
   font-size: 2rem;
   margin: 0.5rem;
}

p {
  margin-top: 1rem;
}

</style>
