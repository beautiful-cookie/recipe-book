import styles from './Header.module.css' 
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder'; 
import { Link } from 'react-router-dom'; 
// Пусть Навигация будет разбира по якорям страницы 
// Придумай еще какие-то разделы для якорей 
const Header = () => {
  return ( 
    <header> 
      <div className={styles.headerBtnsWrapper}>
        <span className={styles.empty}></span>
        <span className={styles.logo}>Recipes</span>
        <div className={styles.tabs}>
          <Link to='/' className={styles.searchTab}>
            <span> <SearchIcon sx={{ fontSize: 20 }} /> Search</span>          
          </Link>
          <span className={styles.favorites}> <StarBorderIcon sx={{ fontSize: 20 }} /> Favorites</span>
        </div>
      </div>
    </header>
  )
} 

export default Header; 