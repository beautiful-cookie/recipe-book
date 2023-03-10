import { useParams } from "react-router-dom"; 
import { useEffect, useState } from 'react'; 
import styles from './Recipe.module.css'; 

const Recipe = (props) => {

  const {recipe_id} = useParams(); 
  const apiUrl = 'https://api.edamam.com/api/recipes/v2/';
  const appId = '44654729';
  const appKey = '441fd11907adb74f6520c07afefa3676'; 

  const [recipe_name, setRecipe_name] = useState(""); 
  const [recipe_img, setRecipe_img] = useState(""); 
  const [recipe_calories, setRecipe_calories] = useState(""); 

  useEffect(() => {
    fetch(`${apiUrl}${recipe_id}?type=public&app_id=${appId}&app_key=${appKey}`)
    .then(responce => responce.json()) 
    .then(responceJSON => {
      console.log(responceJSON) 
      let recipe = responceJSON.recipe 
      setRecipe_name(recipe.label) 
      setRecipe_img(recipe.image) 
      setRecipe_calories(recipe.calories) 
    })
  }, [recipe_id]) 

  return (
    <div className={styles.recipeWrapper}> 
      <img src={recipe_img} alt="" /> 
      {recipe_name} 
      {recipe_calories} 
    </div>
  )
} 

export default Recipe; 