import styles from "../Cards/Cards.module.css";
import Products from "../../datas/datas.json";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Cards() {
    const [currImg] = useState(0);  
    return (
        <div className={styles.gallery}>
            {Products.map((product) => (
               <Link
                  to={`/fiche_logement/${product.id}`}
                  className={styles.productItem}
                  key={product.id}
               >
                  <img
                     className={styles.productImg}
                     src={product.pictures[currImg]}
                     alt="logement"
                  />
                  <div className={styles.productTitle}>
                     <span>{product.title}</span>
                  </div>
               </Link>
            ))}
         </div>
    )
}