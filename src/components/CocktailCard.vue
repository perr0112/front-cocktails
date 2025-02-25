<script setup lang="ts">
import type { Cocktail } from '@/types/Cocktail';

defineProps<{
  cocktail: Cocktail;
}>();
</script>

<template>
    <div class="cocktail-card" :key="cocktail.id">
        <div class="card__cover">
            <img :src="cocktail.thumbnail" :alt="`${cocktail.name} cover`" />
            <div class="category">{{ cocktail.category }}</div>
        </div>
        <div class="card__infos">
            <div class="infos__main">
                <p>
                    {{ cocktail?.name }}
                </p>
                <span>{{ cocktail.isAlcoholic ? 'Alcoolisé' : 'Non-alcoolisé' }}</span>
            </div>
            <div class="line"></div>
            <div class="ingredients">
                <p>
                    <img src="../assets/icons/cocktail.svg" alt="cocktail icon" />
                    Liste des ingrédients
                </p>
                <div class="ingredients__list">
                    <div class="ingredient" v-for="ingredient in cocktail.ingredients">
                        <span>{{ ingredient }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>