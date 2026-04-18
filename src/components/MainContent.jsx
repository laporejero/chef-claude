import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromAI } from "../ai"

export default function Main() {

    console.log(import.meta.env.VITE_HF_API_KEY)

    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [recipe, setRecipe] = React.useState("")

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function handleGetRecipe() {
        const result = await getRecipeFromAI(ingredients)
        setRecipe(result)
        setRecipeShown(true)
    }

    return (
        <main>
            <form
                action={addIngredient}
                className="add-ingredient-form"
            >
                <input 
                    type="text" 
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    />
                <button>Add ingredient</button>
            </form> 

            {   
                // if the ingredients array length is greater than 0 then display the section
                ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients} 
                    handleGetRecipe={handleGetRecipe} 
                />
            }
            
            { recipeShown && <ClaudeRecipe recipe={recipe} /> }

        </main>
    )
}