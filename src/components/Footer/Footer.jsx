import React from "react"
import Img from "../../assets/logo-footer.png"
import styles from "./Footer.module.css"
import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  console.log(pathname);
  // you can check a more conditions here
   if (pathname === "/*") return null;
 // if (pathname !== ["/", "/fiche_logement/:id"]) 
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={Img} alt="logo de Kasa"></img>
      </div>
      <p className={styles.footer_text}>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
