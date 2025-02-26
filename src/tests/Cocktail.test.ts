import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import CocktailCard from '../components/CocktailCard.vue';
import type { Cocktail } from '@/types/Cocktail';

describe('CocktailCard', () => {
  const mockCocktail: Cocktail = {
    id: 1,
    name: 'Mojito',
    isAlcoholic: 'Alcoholic',
    category: 'Cocktail',
    thumbnail: 'https://example.com/mojito.jpg',
    ingredients: ['Rum', 'Mint', 'Lime', 'Sugar', 'Soda water'],
  };

  it('renders cocktail information correctly', () => {
    const wrapper = mount(CocktailCard, {
      props: {
        cocktail: mockCocktail
      }
    });

    expect(wrapper.text()).toContain('Mojito');
    expect(wrapper.text()).toContain('Cocktail');
    expect(wrapper.text()).toContain('Alcoolisé');
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/mojito.jpg');
  });
});