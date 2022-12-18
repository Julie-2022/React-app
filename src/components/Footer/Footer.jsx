import React from "react"
import Img from "../../assets/logo-footer.png"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={Img} alt="logo de Kasa"></img>
      </div>
      <p className={styles.footer_text}>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
