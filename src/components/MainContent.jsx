import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipeShown() {
        setRecipeShown(prev => !prev)
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
                    toggleRecipeShown={toggleRecipeShown} 
                />
            }
            
            { recipeShown && <ClaudeRecipe /> }

        </main>
    )
}