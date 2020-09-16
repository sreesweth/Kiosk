import { IIngredient } from './ingredient.interface';

export interface IMenuItem {
    id: string;
    groupId: string;
    name: string;
    Calories: string;
    label: string;
    image: string;
    description: string;
    type: string;
    cost: number;
    sizes: Array<string>;
    isFavorite: boolean;
    ingredients: Array<IIngredient>;
    nutritionSummary: string;
    ingredientsAndAllergens: string;
}
