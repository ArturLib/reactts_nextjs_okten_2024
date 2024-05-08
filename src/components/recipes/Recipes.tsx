import React, {FC, useEffect, useState} from 'react';
import {Recipe} from "../recipe/Recipe";
import { IRecipeProps } from '../../models/Recipe';
import { getAllRecipes } from '../../services/recipes.api.service';

const Recipes: FC<any> = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([])

    useEffect(() => {
        getAllRecipes().then(value => console.log(value.data));
    }, []);

    return (
        <div>
            {
                recipes.map((recipe: IRecipeProps) => (
                    <Recipe key={recipe.id} name={recipe.name} ingredients={recipe.ingredients}
                            instructions={recipe.instructions} cuisine={recipe.cuisine} image={recipe.image}
                            mealType={recipe.mealType}/>))
            }
        </div>
    );
};

export {Recipes};