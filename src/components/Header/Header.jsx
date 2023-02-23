import styles from './Header.module.css' 
// Пусть Навигация будет разбира по якорям страницы 
// Придумай еще какие-то разделы для якорей 
const Header = () => {
  return ( 
    <header> 
      <div className={styles.headerBtnsWrapper}>
        <span className={`${styles.btn} ${styles.searchBtn}`}>Поиск</span> 
        <span className={`${styles.btn} ${styles.recipesBtn}`}>Рецепты</span> 
      </div>
    </header>
  )
} 

export default Header; 