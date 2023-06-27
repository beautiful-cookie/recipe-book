import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import styles from './Carousel.module.css'; 
import cn from 'classnames'; 

const Carousel = () => {

  const apiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=';
  const appId = '44654729'; 
  const appKey = '441fd11907adb74f6520c07afefa3676';  

  const [recipesList, setRecipesList] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recipesList.length);
  }; 

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + recipesList.length) % recipesList.length);
  };

  useEffect(() => {
    fetch(`${apiUrl}soup&app_id=${appId}&app_key=${appKey}&random=true`) 
    .then(responce => responce.json()) 
    .then(recipesJSON => {
      setRecipesList(recipesJSON.hits)
    }) 
  }, [])

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}> 
        {recipesList.slice(currentIndex, currentIndex + 4).map((item, index) => (
            <Link to={`/details/${item.recipe.uri.split('#')[1]}`} className={styles.pictureWrapper}>
              <img key={index} src={item.recipe.image} alt={`Slide ${index + 1}`} />
            </Link>
          ))}
      </div>
      <button className={cn(styles.carouselButton, styles.carouselButtonPrev)} onClick={prevSlide}>{'<'}</button> 
      <button className={cn(styles.carouselButton, styles.carouselButtonNext)} onClick={nextSlide}>{'>'}</button> 
    </div>
  )
} 

export default Carousel; 


