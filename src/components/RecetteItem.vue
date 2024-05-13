<template>
  <div
    class="relative max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
      <img class="rounded-t-lg w-[90%] h-[33vh] mx-auto" :src="recette.image" alt="" />
    </div>
    <div class="p-5">

      <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ recette.nom }}</h1>
      <h1>{{ recette.id }}</h1>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ recette.desc }}</p>

      <div>
        <h2 class="mb-3 font-normal text-black dark:text-gray-400 underline">Ingredients:</h2>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ recette.ingredients }}</p>
      </div>

      <div>
        <h2 class="mb-3 font-normal text-black dark:text-gray-400 underline">Instructions:</h2>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ recette.instructions }}</p>
      </div>

      <div class="relative">
        <h2 class="mb-3 font-normal text-black dark:text-gray-400 underline">Status:</h2>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span v-if="recette.realisee">Realisé</span>
          <span v-else="recette.realisee">En Attente</span>
        </p>

      </div>
    </div>
    <button class="bg-blue-700 px-3 py-1 rounded text-white hover:bg-blue-500 absolute bottom-3 right-3"
      @click="editStatus()">Realisé</button>
  </div>

</template>

<script setup>

const props = defineProps({
  recette: {
    type: Object,
    required: true,
  },
});

</script>


<script>

export default {
  methods: {
    editStatus() {
      this.recette.realisee = !this.recette.realisee;
      this.updateRecette(this.recette);
    },

    async updateRecette(recette) {
      const updatedRecette = {
        id: recette.id,
        realisee: recette.realisee
      };
      const recetteId = recette.id
      const res = await fetch(`http://localhost:3000/recettes/${recetteId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recette),
      });
      return;
    },

  }
}
</script>
