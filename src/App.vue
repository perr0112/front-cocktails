<script setup>
import { onMounted, ref } from 'vue';
import { fetchCocktails } from './services/cocktails';

import cocktailcard from './components/CocktailCard.vue';

const cocktails = ref();

const loadCocktails = async () => {
  try {
    const res = await fetchCocktails(3);
    cocktails.value = res;
  } catch (error) {
    console.error('Error fetching cocktails:', error);
  }
}

onMounted(async () => {
  await loadCocktails();
})
</script>

<template>
  <header>
    <h1>🏖️ Beach Club</h1>
    <span>+ Menu</span>
  </header>
  
  <div class="line" style="margin-top: 1rem;"></div>

  <container>
    <h3>Découvrez nos trois cocktails phares du moment !</h3>
    <div class="btn">Charger trois nouveaux cocktails</div>

    <div class="cocktails">
      <cocktailcard
        v-for="cocktail in cocktails"
        :cocktail="cocktail"
      >
      </cocktailcard>
    </div>
  </container>
</template>
