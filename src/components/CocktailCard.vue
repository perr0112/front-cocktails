<script setup lang="ts">
defineProps<{
  cocktail: {strDrink: string};
}>();
</script>

<template>
    <div class="cocktail-card">
        <p>
            {{ cocktail?.strDrink }}
        </p>
    </div>
</template>