






import React, { useEffect, useState, useRef } from 'react'; 
import styles from './Carousel.module.css'; 
import cn from 'classnames'; 

const Carousel = () => {

  const apiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=';
  const appId = '44654729'; 
  const appKey = '441fd11907adb74f6520c07afefa3676';  

  const slider = useRef(null); 
  const [recipesList, setRecipesList] = useState([]); 
  const [position, setPosition] = useState(0); 
  const [prev, setPrev] = useState(false); 
  const [next, setNext] = useState(false);  


  const prevHandler = () => { 
    if (position === 0) {
      setPrev(true) 
      setNext(false)
    } else {
      setPosition(position + 400)
      setPrev(false) 

      slider.current.childNodes.forEach(image => {
        image.style.transform = `translateX(${position}px)` 
      }) 
    }
    console.log(position)
  }

  const nextHandler = () => { 
    if (position === -(recipesList.length - 4) * 200) {
      setNext(true) 
      setPrev(false) 
    } else {
      setPosition(position - 400)
      setPrev(false) 

      slider.current.childNodes.forEach(image => {
        image.style.transform = `translateX(${position}px)` 
      }) 
    }
    console.log(position)
  }

  useEffect(() => {
    fetch(`${apiUrl}soup&app_id=${appId}&app_key=${appKey}&random=true`) 
    .then(responce => responce.json()) 
    .then(recipesJSON => {
      setRecipesList(recipesJSON.hits)
    }) 
  }, [])

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel} ref={slider}> 
        {recipesList.map((item) => (
          <img src={item.recipe.image} alt="" /> 
        ))}
      </div>
      <button className={cn(styles.carouselButton, styles.carouselButtonPrev)} onClick={prevHandler} disabled={prev}>{'<'}</button> 
      <button className={cn(styles.carouselButton, styles.carouselButtonNext)} onClick={nextHandler} disabled={next}>{'>'}</button> 
    </div>
  )
} 

export default Carousel; 