import React from "react";
import styles from "../../components/Banner/Banner.module.css"

export default function Banner({image, text}) {
    return (
        <div className={styles.banner}>
          <img src={image} alt="paysage nature" className={styles.bannerImg} />
        <div className={styles.bannerOverlay}></div>
      {text ? <h1 className={styles.bannerText}>{text}</h1> : null}
        </div>
    )
}