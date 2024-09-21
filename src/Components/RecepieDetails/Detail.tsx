import React from "react";
import './Detail.css';

// Define the props interface for Details
interface DetailsProps {
    recipe: {
        id: number;
        name: string;
        instructions: string;
        ingredients: string[];
        tags: string[];
        rating: number;
        prepTimeMinutes: number;
        cookTimeMinutes: number;
        image: string;
        mealType: string;
    };
}

const Details: React.FC<DetailsProps> = ({ recipe }) => {
    return (
        <div className="container">

            <div className="grid">
                <div className="ingredients">
                    <h2>Instructions</h2>
                    <p>{recipe.instructions}</p>
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <img src="tick.png" alt="tick mark" className="tick-mark" />
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="picture">
                    <img src={recipe.image} alt={recipe.name} />
                </div>
            </div>
        </div>
    );
};

// Memoize the Details component
export default React.memo(Details);
