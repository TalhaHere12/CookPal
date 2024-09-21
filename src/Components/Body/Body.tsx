import React, { useEffect, useState, Suspense, useCallback } from "react";
import axios from "axios";
import './Body.css';

const Details = React.lazy(() => import("../RecepieDetails/Detail"));

interface Recipe {
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
}

const RecipeCard = React.memo(({ recipe, onClick }: { recipe: Recipe, onClick: () => void }) => (
  <div className="rows" onClick={onClick}>
    <div className="img-div">
      <img src={recipe.image} alt={recipe.name} loading="lazy" />
    </div>
    <div className="details-col">
      <div>
        <h3>{recipe.name}</h3>
        <div className="prep-time">
          <img src="time.png" alt="Clock icon" className="clock-icon" loading="lazy" />
          <p>{recipe.prepTimeMinutes} minutes</p>
        </div>
      </div>
      <div className="rating-type">
        <p>{recipe.rating}</p>
        <p>{recipe.mealType}</p>
      </div>
    </div>
  </div>
));

const Body: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get<{ recipes: Recipe[] }>('https://dummyjson.com/recipes');
        setRecipes(response.data.recipes.slice(0, 6));
      } catch (error) {
        console.error('Failed to fetch recipes', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleCardClick = useCallback((recipe: Recipe) => {
    setSelectedRecipe(recipe);
  }, []);

  return (
    <div>
      {!selectedRecipe ? (
        <div className="recepies">
          <div className="columns">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => handleCardClick(recipe)}
              />
            ))}
          </div>
        </div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Details recipe={selectedRecipe} />
        </Suspense>
      )}
    </div>
  );
};

export default Body;
