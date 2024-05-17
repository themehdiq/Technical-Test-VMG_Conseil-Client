<script setup>
import { RouterLink, RouterView } from "vue-router";

import ToolingIcon from "./components/icons/IconTooling.vue";
</script>

<template>
  <header>
    <nav class="bg-red-500 border-b border-green-300">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div class="flex items-center justify-center md:items-stretch md:justify-start">
            <!-- Logo -->

            <nav class="flex flex-shrink-0 items-center mr-4">
              <RouterLink>
                <template #icon>
                  <ToolingIcon /> icon
                </template>
              </RouterLink>
              <span class="hidden md:block text-white text-2xl font-bold ml-2">
                Recettes Management
              </span>
            </nav>
            <div class="md:ml-auto">
              <div class="flex space-x-10">
                <nav class="text-white">
                  <RouterLink class="text-xl" to="/">Home</RouterLink>
                </nav>
                <nav class="text-white">
                  <RouterLink class="text-xl text-nowrap" to="/add-recette">Ajouter
                    Recette
                  </RouterLink>
                </nav>

              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
