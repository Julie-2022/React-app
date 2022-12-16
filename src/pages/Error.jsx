import React from "react";
import Error404 from "../assets/404.png";
import { Link } from "react-router-dom";
import Meta from "../components/Meta/Meta";
import styles from "../styles/Error.module.css";

export default function Error() {
   return (
      <div className={styles.error}>
         <Meta title={null} description={null} />
         <div>
            <img src={Error404} alt="erreur 404" />
         </div>
         <p className={styles.errorP}>
            Oups ! La page que vous demandez n'existe pas.
         </p>
         <Link to={"/"} className={styles.errorHome}>
            Retour sur la page d'accueil
         </Link>
      </div>
   );
}