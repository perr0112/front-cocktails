<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fetchCocktails } from './services/cocktails';
import cocktailcard from './components/CocktailCard.vue';
import type { Cocktail } from './types/Cocktail';

const cocktails = ref<Cocktail[]>([]);
const isLoading = ref(false);
const isError = ref(false)

const loadCocktails = async () => {
  isLoading.value = true;
  try {
    const res = await fetchCocktails(3);
    cocktails.value = res.map(cocktail => ({
      ...cocktail,
      isAlcoholic: cocktail.isAlcoholic.toString()
    }));
    await new Promise(resolve => setTimeout(resolve, 1000));
  } catch (error) {
    console.log(error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}

onMounted(loadCocktails);
</script>

<template>
  <header>
    <h1>🏖️ Beach Club</h1>
    <span>+ Menu</span>
  </header>

  <div class="line" style="margin-top: 1rem;"></div>

  <container>
    <h3>Découvrez nos trois cocktails phares du moment !</h3>
    <div class="btn" @click="loadCocktails" :class="{ 'disabled': isLoading }">
      {{ isLoading ? 'Chargement...' : 'Charger de nouveaux cocktails' }}
    </div>


    <div v-if="isError">Une erreur est survenue. Veuillez réessayer</div>

    <div v-else class="cocktails">
      <div v-if="isLoading">
        <span class="loader"></span>
      </div>
      <cocktailcard
        v-else
        v-for="cocktail in cocktails"
        :key="cocktail.id"
        :cocktail="cocktail"
      />
    </div>
  </container>
</template>
