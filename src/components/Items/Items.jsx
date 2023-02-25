import styles from './Items.module.css'; 

const Items = ({recipe}) => {
  return(
    <div className={styles.itemWrapper}>
        <div className={styles.pictureWrapper}>
          <img src={recipe.recipe.image} alt="" />
        </div>
        <div className={styles.ingridients}>

        </div>
    </div>
  )
} 

export default Items; 