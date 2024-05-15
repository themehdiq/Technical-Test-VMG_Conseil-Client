<template>
    <section class="bg-blue-50 px-20 py-10">
        <div class="lg:container m-auto">
            <h2 class="text-4xl font-bold text-red-400 my-7 text-center">
                Liste des Recettes
            </h2>
            <div class="my-11 flex justify-center">
                <span class="isolate inline-flex rounded-md shadow-sm">
                    <button @click="afficherRecettesRealise" type="button"
                        class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-10 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">Realisé</button>
                    <button @click="afficherRecettesNonRealise" type="button"
                        class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-10 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">En
                        Attente</button>
                    <button @click="afficherToutesRecettes" type="button"
                        class="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-10 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">Tout</button>
                </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RecetteItem v-for="recette in filteredData" :key="recette.id" :recette="recette" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import RecetteItem from "./RecetteItem.vue";
import { useCardStore } from "../stores/useCardStore.js";

const cardStore = useCardStore();
const myData = ref(cardStore.recettes);
const filter = ref('all');

const filteredData = computed(() => {
    if (filter.value === 'realise') {
        return myData.value.filter(recette => recette.realisee === true);
    } else if (filter.value === 'nonRealise') {
        return myData.value.filter(recette => recette.realisee === false);
    }
    return myData.value;
});

const afficherToutesRecettes = () => {
    filter.value = 'all';
};

const afficherRecettesRealise = () => {
    filter.value = 'realise';
};

const afficherRecettesNonRealise = () => {
    filter.value = 'nonRealise';
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
