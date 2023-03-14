import styles from './Search.module.css' 
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 

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
            <Link to='/#' className={styles.SearchButton}>
                <div onClick={searchFunction}>Search</div>
            </Link>
        </div>
    )
} 

export default Search; 