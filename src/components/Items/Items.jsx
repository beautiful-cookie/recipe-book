import { Link } from 'react-router-dom'; 
import styles from './Items.module.css'; 

const Items = ({item}) => {

  const recipe_uri = item.recipe.uri 
  const recipe_id = recipe_uri.split('#')[1]

  return(
    <div className={styles.itemWrapper}>
        <Link to={`/details/${recipe_id}`} className={styles.pictureWrapper}>
          <img src={item.recipe.image} alt="" />
        </Link>

        <div className={styles.label}>
          <span>{item.recipe.label}</span>
        </div>

        <div className={styles.ingridients}>
          <details>
            <ul className={styles.ingridientItemWrapper}>
              {item.recipe.ingredients.map((element, index) => (<li key={index}>{element.text}</li>))}
            </ul>
            <summary>
              Ingridient         
            </summary>
          </details>
        </div>
    </div>
  )
} 

export default Items;
