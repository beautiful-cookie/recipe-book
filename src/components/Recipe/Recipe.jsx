import { useParams } from "react-router-dom"; 
import { useEffect, useState } from 'react'; 
import styles from './Recipe.module.css'; 
import IngredientItem from "./IngredientItem";

const Recipe = (props) => {

  const {recipe_id} = useParams(); 
  const apiUrl = 'https://api.edamam.com/api/recipes/v2/';
  const appId = '44654729';
  const appKey = '441fd11907adb74f6520c07afefa3676'; 

  const [recipe_name, setRecipe_name] = useState(""); 
  const [recipe_img, setRecipe_img] = useState(""); 
  const [recipe_calories, setRecipe_calories] = useState(""); 
  const [recipe_totalWeight, setRecipe_totalWeight] = useState(""); 
  const [recipe_totalDaily, setRecipe_totalDaily] = useState({}); 
  const [recipe_ingredients, setRecipe_ingredients] = useState([]); 
  


  useEffect(() => {
    fetch(`${apiUrl}${recipe_id}?type=public&app_id=${appId}&app_key=${appKey}`)
    .then(responce => responce.json()) 
    .then(responceJSON => {
      console.log(responceJSON) 
      let recipe = responceJSON.recipe 
      setRecipe_name(recipe.label) 
      setRecipe_img(recipe.image) 
      setRecipe_calories(recipe.calories.toFixed(2)) 
      setRecipe_totalWeight(recipe.totalWeight.toFixed(2)) 
      setRecipe_totalDaily(recipe.totalDaily) 
      setRecipe_ingredients(recipe.ingredients) 
    })
  }, [recipe_id]) 

  return (
    <div className={styles.recipeWrapper}> 
      <div className={styles.imageWrapper}>
        <img src={recipe_img} alt="" /> 
      </div> 

      <h2>{recipe_name}</h2>

      <div className={styles.detailsWrapper}>
        <div className={styles.detailsContainer}>
          <p>
            <span className={styles.detailsText}>Calories:</span> {recipe_calories}
          </p>
          <p>
            <span className={styles.detailsText}>Weight:</span> {recipe_totalWeight}
          </p>
          <p>
            <details className={styles.dailyNutrientsDetails}>
              <ul>
                {Object.entries(recipe_totalDaily).map(([key, nutrient]) => <li key={key}>{nutrient.label}: {Math.round(nutrient.quantity)}{nutrient.unit}</li>)}                
              </ul>
              <summary>
                <span className={styles.detailsText}>Daily Nutrients:</span> 
              </summary>
            </details>
          </p>           
        </div> 
      </div>  

      <h3>Ingridients</h3> 

      <div className={styles.ingridientsWrapper}>
        <div className={styles.ingridientsContent}>
          {recipe_ingredients.map(item => <IngredientItem item={item} />)} 
        </div>
      </div>
    </div>
  )
} 

export default Recipe; 