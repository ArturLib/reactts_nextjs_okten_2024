import React, {FC, useEffect, useState} from 'react';
import {IRecipeProps, Recipe} from "../recipe/Recipe";

const Recipes: FC<any> = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(value => value.json())
            .then(({recipes}) => {
                setRecipes(recipes);
            });
    }, []);

    return (
        <div>
            {
                recipes.map((recipe: IRecipeProps) => (
                    <Recipe key={recipe.id} name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions}
                            cuisine={recipe.cuisine} image={recipe.image} mealType={recipe.mealType}/>))
            }
        </div>
    );
};

export {Recipes};