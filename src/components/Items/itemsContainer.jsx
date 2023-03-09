import Items from "./Items"; 
import styles from './Items.module.css'; 


const ItemsContainer = ({recipesArr, paginatePrevPage, paginateNextPage}) => {
  return (
      <div className={styles.itemsContainer}>
        <div className={styles.itemsDisplayContainer}>
          { 
            recipesArr.map((recipe, index) => (
              <Items key={index} item={recipe} /> 
            ))
          }
          <div className={styles.PaginationWrapper}> 
            <div className={styles.pagination}>
              <button className={styles.nextPage} onClick={paginatePrevPage}>{'<'}</button>
              <button className={styles.previousPage} onClick={paginateNextPage}>{'>'}</button>
            </div>
          </div>
        </div>
    </div>
  )
} 

export default ItemsContainer; 