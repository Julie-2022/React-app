import React from "react";
import FullStar from "../../assets/fullStar.svg";
import EmptyStar from "../../assets/emptyStar.svg";
import styles from "./Stars.module.css"

export default function Stars(rate) {
   const range = [1, 2, 3, 4, 5];

   return range.map((rangeElem, key) =>
      rangeElem <= rate.rate ? (
         <img src={FullStar} alt="étoile pleine" key={key} className={styles.fullStar} />
      ) : (
         <img
            src={EmptyStar}
            alt="étoile vide"
            key={key}
            className={styles.emptyStar}
         />
      )
   );
}