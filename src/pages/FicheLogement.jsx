import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Products from "../datas/datas.json";
import Carrousel from "../components/Carrousel/Carrousel";
import Stars from "../components/Stars/Stars";
import DropDown from "../components/Dropdown/Dropdown";
import Meta from "../components/Meta/Meta";
import styles from "../styles/FicheLogement.module.css";
import Tags from "../components/Tags/Tags"
import Contact from "../components/Contact/Contact";

export default function FicheLogement() {
   const params = useParams();

   const navigate = useNavigate();
   useEffect(() => {
      let product = Products.find((product) => params.id === product.id);
      if (!product) {
         navigate("/error");
      }
   });

   return (
      <div id={styles.lodging}>
         <div className={styles.lodging}>
            {Products.filter((product) => product.id === params.id).map(
               (product, index) => (
                  <div key={product.id - index} className={styles.lodgingBoxes}>
                     <Meta
                        title={product.title}
                        description={product.description}
                     />
                     <div className={styles.lodgingCarousel}>
                        <Carrousel data={product.pictures} />
                     </div>
                     <div className={styles.lodgingBox}>
                        <div className={styles.lodgingLeft}>
                           <h2 className={styles.lodgingTitle}>{product.title}</h2>
                           <p className={styles.lodgingLocation}>{product.location}</p>
                            <div className={styles.tags}>
                              {product.tags.map((tag, index) => (
                                 <Tags key={index} getTag={tag} />
                              ))}
                           </div> 
                        </div>
                        <div className={styles.lodgingRight}>
                           <Contact />
                           <div className={styles.rating}>
                              <Stars rate={product.rating} />
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className={styles.dropdown}>
                           <DropDown
                              title={"Description"}
                              txt={product.description}
                              // style={{minHeight: "265px"}}
                           />
                           <DropDown
                              title={"Équipements"}
                              txtArray={product.equipments}
                              // style={{minHeight: "265px"}}
                           />
                        </div>
                     </div>
                  </div>
               )
            )}
         </div>
      </div>
   );
}