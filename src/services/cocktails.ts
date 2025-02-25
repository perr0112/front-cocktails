const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const fetchCocktail = async () => {
    try {
        const response = await fetch(`${API_URL}/random.php`);

        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.error('Erreur:', error);
    }
};

export const fetchCocktails = async (count: number = 3) => {
    const cocktails = [];

    for (let i = 0; i < count; i++) {
        const res = await fetchCocktail();
        const item = res?.drinks[0];

        console.log(item, '--------');

        const ingredientsPattern = new RegExp(/strIngredient\d+/);
        const listIngrediens: any = [];

        item && Object.keys(item).forEach((key) => {
            if (ingredientsPattern.test(key) && item[key]) {
                const ingredient = item[key];
                listIngrediens.push(ingredient);
                console.log(ingredient, '--------');
            }
        });

        const cocktail = {
            name: item?.strDrink,
            id: item?.idDrink,
            isAlcoholic: item?.strAlcoholic === 'Alcoholic',
            category: item?.strCategory,
            ingredients: listIngrediens,
        }

        cocktails.push(cocktail);
    }

    console.log(cocktails, '--------');

    return cocktails;
}
