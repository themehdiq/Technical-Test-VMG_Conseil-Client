<template>
    <section class="bg-blue-50 px-20 py-10">
        <div class="lg:container m-auto">
            <h2 class="text-4xl font-bold text-red-400 my-7 text-center">
                Liste des Recettes
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RecetteItem v-for="recette in data.recettes" key="recette.id" :recette="recette" />
            </div>
        </div>
    </section>
</template>

<script setup>
import RecetteItem from "./RecetteItem.vue";
import { useCardStore } from "../stores/useCardStore.js";
const data = useCardStore();
</script>

<style></style>
