import styles from './Items.module.css'; 

const Items = ({item}) => {
  return(
    <div className={styles.itemWrapper}>
        <div className={styles.pictureWrapper}>
          <img src={item.recipe.image} alt="" />
        </div>

        <div className={styles.label}>
          <span>{item.recipe.label}</span>
        </div>

        <div className={styles.ingridients}>
          <details>
            <ul className={styles.ingridientItemWrapper}>
              {item.recipe.ingredients.map(element => (<li key={element.totalWeight}>{element.text}</li>))}
            </ul>
            <summary>
              Ingridient         
            </summary>
          </details>
        </div>
        <div className={styles.moreDetails}>
          <div className={styles.btnDetails}>Подробнее</div>
        </div>
    </div>
  )
} 

export default Items; 