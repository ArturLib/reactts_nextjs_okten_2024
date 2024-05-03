import React, {FC} from 'react';

export interface IRecipeProps {
    id?: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes?: number,
    cookTimeMinutes?: number,
    servings?: number,
    difficulty?: string,
    cuisine: string,
    caloriesPerServing?: number,
    tags?: string[],
    userId?: number,
    image: string,
    rating?: number,
    reviewCount?: number,
    mealType: string[]
}

export type IRecipeTypeProps = IRecipeProps & {children?: React.ReactNode}

const Recipe: FC<IRecipeTypeProps> = ({name, ingredients, mealType, cuisine, instructions, image}) => {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {
                    ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                }
            </ul>

            <h3>
                {mealType.map((mealType, index) => <p key={index}>{mealType}</p>)}
            </h3>
            <h3>{cuisine}</h3>
            <ul>
                {
                    instructions.map((instruction, index) => <li key={index}>{instruction}</li>)
                }
            </ul>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Recipe}