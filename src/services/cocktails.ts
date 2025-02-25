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
        const cocktail = await fetchCocktail();
        cocktails.push(cocktail.drinks[0]);
    }

    console.log(cocktails);


    return cocktails;
}
