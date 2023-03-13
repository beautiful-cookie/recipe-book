import styles from './Recipe.module.css';  

const IngredientItem = ({item}) => {
  return (
    <div className={styles.ingredientItemWrapper}>
      <div className={styles.ingredientImageWrapper}>
        <img src={item.image} /> 
      </div>

      <h4>{item.food}</h4> 
      
      <p>Weight: {item.weight.toFixed(2)}</p>
      <p>{item.text}</p> 
    </div>
  )
} 

export default IngredientItem; 