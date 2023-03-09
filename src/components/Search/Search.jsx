import styles from './Search.module.css' 
import React, { useState } from 'react'; 

const Search = (props) => {
    const [search, setSearch] = useState(""); 

    const setSearchValue = (event) => {
        setSearch(event.target.value) 
    } 
    const searchFunction = (event) => {
        event.preventDefault() 
        props.search(search)
        setSearch("") 
    } 
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            props.search(search) 
            setSearch("") 
        }
    }

    return (
        <div className={styles.SearchWrapper}> 
            <input placeholder='Поиск...' type="text" value={search} onChange={setSearchValue} onKeyPress={handleKeyPress} className={styles.Search} /> 
            <input type='submit' value='Search' onClick={searchFunction} className={styles.SearchButton} /> 
        </div>
    )
} 

export default Search; 