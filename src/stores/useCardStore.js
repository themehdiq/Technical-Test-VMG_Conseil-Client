// import { ref, computed } from "vue";
import { defineStore } from "pinia";

async function fetchRecettes() {
  try {
    const response = await fetch("http://localhost:3000/recettes");
    const recettes = await response.json();
    return recettes;
    // console.log(recettes);
  } catch (error) {
    console.error(error);
  }
}

const myRecettes = await fetchRecettes();
const recetteRealise = myRecettes.filter(
  (recette) => recette.realisee === true
);
const recetteNonRealise = myRecettes.filter(
  (recette) => recette.realisee === false
);

console.log(myRecettes);

export const useCardStore = defineStore("card", {
  state: () => ({
    recettes: myRecettes,
  }),
  getters: {},
  actions: {},
});
