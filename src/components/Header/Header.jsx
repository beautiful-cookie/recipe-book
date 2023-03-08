import styles from './Header.module.css' 
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// Пусть Навигация будет разбира по якорям страницы 
// Придумай еще какие-то разделы для якорей 
const Header = () => {
  return ( 
    <header> 
      <div className={styles.headerBtnsWrapper}>
        <span className={styles.empty}></span>
        <span className={styles.logo}>Recipes</span>
        <div className={styles.tabs}>
          <span className={styles.searchTab}> <SearchIcon /> Search</span>
          <span className={styles.favorites}> <StarBorderIcon /> Favorites</span>
        </div>
      </div>
    </header>
  )
} 

export default Header; 