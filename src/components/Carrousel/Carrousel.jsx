import React from 'react'
import { useState, useEffect } from "react";
import ArrowRight from '../../assets/arrow-right.svg'
import ArrowLeft from '../../assets/arrow-left.svg'
import styles from "../Carrousel/Carrousel.module.css"

function Carrousel(product) {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [right, setRight] = useState(true);
   const slides = product.data;

   useEffect(() => {
      slides.forEach((image) => {
         new Image().src = image;
      });
   }, [slides]);

   const prevSlide = () => {
      setRight(false);
      const isFirstSlide = currentSlide === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
      setCurrentSlide(newIndex);
   };

   const nextSlide = () => {
      setRight(true);
      const isLastSlide = currentSlide === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentSlide + 1;
      setCurrentSlide(newIndex);
   };

   const displayImg = () => {
      if (slides.length - 1 >= 1) {
         return true;
      }
      return (
      <div className={styles.carrousselDisplayNoImage}>Image non disponible</div>
    );
   };

   return displayImg() ? (
      <div className={styles.slider}>
         <img
            className={`${styles.arrow} ${styles.leftArrow}`}
            src={ArrowLeft}
            alt="flèche vers la gauche"
            onClick={prevSlide}
         ></img>

         <img
            className={`${styles.arrow} ${styles.rightArrow}`}
            src={ArrowRight}
            alt="flèche vers la droite"
            onClick={nextSlide}
         ></img>
         {slides.map((slide, index) => {
            return (
               <div
                  className={
                     index === currentSlide
                        ? `${right ? styles.right : styles.left}`
                        : styles.slideHide
                  }
                  key={index}
               >
                  {index === currentSlide && (
                     <img
                        src={slide}
                        alt="logement"
                        className={
                           right ? styles.slideRight : styles.slideLeft
                        }
                     ></img>
                  )}
               </div>
            );
         })}
         <span className={styles.number}>
            {currentSlide + 1}/{slides.length}
         </span>
      </div>
   ) : (
      <img
         src={`${slides[currentSlide]}`}
         className={styles.slideOne}
         alt="logement"
      ></img>
   );
}

export default Carrousel;