<script></script>

<template>
  <section class="bg-indigo-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form v-on:reset="resetFields" v-on:submit="submitForm">
          <h2 class="text-3xl text-center font-semibold mb-6">
            Ajouter Recette
          </h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service-name">
              Nom de la Recette
            </label>
            <input type="text" id="service-name" class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Nom de la recette" v-model="nom" required />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea id="description" class="border rounded w-full py-2 px-3" rows="4"
              placeholder="Description de la recette" v-model="desc" required></textarea>
          </div>

          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">
              Ingrédients
            </label>
            <textarea id="description" class="border rounded w-full py-2 px-3" rows="4"
              placeholder="Ajouter les ingrédients de la recette" v-model="ingredients" required></textarea>
          </div>

          <div class=" mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">
              Instructions de Préparation
            </label>
            <textarea id="description" class="border rounded w-full py-2 px-3" rows="4"
              placeholder="Ajouter les instructions de préparation etc" v-model="instructions" required></textarea>
          </div>

          <!-- <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <textarea id="description" class="border rounded w-full py-2 px-3" rows="4" placeholder="Placer une Image"
              v-model="image" required></textarea>
          </div> -->

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="cover-photo" class="block font-bold text-gray-700 sm:mt-px sm:pt-2">Image de la
              Recette</label>
            <div>
              <label for="image-upload"></label>
              <input type="file" id="image-upload" @click="onFileSelected">
            </div>
          </div>

          <div class="mt-4">
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="reset">
              Renitialiser les champs
            </button>
          </div>

          <div class="mt-4">
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<script>

import { useCardStore } from "../stores/useCardStore.js";
const data = useCardStore();
const recettesLength = data.recettes.length;
console.log(recettesLength);

  export default {
    // state
    data() {
      return {
        nom: "",
        desc: "",
        ingredients: "",
        instructions: "",
        image: "",
      }
    },
    // actions
    methods: {
      resetFields: function() {
      this.nom = "";
      this.desc = "";
      this.ingredients = "";
      this.instructions = "";
      this.image = "";
    },

      async submitForm() {
        
        const newRecette = {
          id: (recettesLength + 1).toString(),
          nom: this.nom,
          desc: this.desc,
          ingredients: this.ingredients,
          instructions: this.instructions,
          realisee: false,
          image: this.image
        };

      const res = await fetch("http://localhost:3000/recettes", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecette),
      });
      
    },

    onFileSelected( event ){
      this.image = event.target.files[0];
      console.log(event);
    }


  }
}
  
</script>
