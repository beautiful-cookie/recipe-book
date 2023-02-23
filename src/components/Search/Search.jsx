import styles from './Search.module.css' 

const Search = () => {
    return (
        <div className={styles.SearchWrapper}> 
            <input placeholder='Поиск...' type="text" className={styles.Search} /> 
            <button className={styles.SearchButton}>Искать</button>
        </div>
    )
} 

export default Search; 