import React, {FC} from 'react';
import { IRecipeProps } from '../../models/Recipe';



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