import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromAI } from "../ai"

export default function Main() {

    console.log(import.meta.env.VITE_HF_API_KEY)

    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromAI(ingredients)
        setRecipe(recipeMarkdown)
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
                    getRecipe={getRecipe} 
                />
            }
            
            { recipe && <ClaudeRecipe recipe={recipe} /> }

        </main>
    )
}