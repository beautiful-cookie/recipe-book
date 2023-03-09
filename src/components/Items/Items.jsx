import { Link } from 'react-router-dom';
import styles from './Items.module.css'; 

const Items = ({item}) => {
  return(
    <div className={styles.itemWrapper}>
        <Link to={`/details/${item.recipe.label}`} className={styles.pictureWrapper}>
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
        <div className={styles.moreDetails}>
          <Link to={`/details/${item.recipe.label}`} className={styles.btnDetails}>
            Подробнее
          </Link>
        </div>
    </div>
  )
} 

export default Items;
