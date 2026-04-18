export default function IngredientsList(props) {
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{props.list}</ul>
            {
                // if the ingredients list is more than 3, display the get-recipe-container div
                props.ingredients.length > 3 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggle}>Get a recipe</button>
                </div>
            }
        </section>
    )
}