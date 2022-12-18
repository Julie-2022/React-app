import React from "react";
import bannerAbout from "../assets/banner-about.jpg";
import DropDown from "../components/Dropdown/Dropdown";
import Meta from "../components/Meta/Meta";
import Infos from "../datas/about.json"
import Banner from "../components/Banner/Banner";

import styles from "../styles/About.module.css";

export default function About() {
   return (
      <div className={styles.about}>
         <Meta
            title="A Propos de Kasa"
            description="Kasa c'est avant tout de la fiabilité, du respect, un service de qualité et une sécurité mise en avant"
         />
         <Banner image={bannerAbout} />
         <div className={styles.dropdown} style={{borderRadius: "5px"}}>
            {Infos.map((info) => (
               <div className={styles.dropdownBox} key={info.id}>
                  <DropDown txt={info.content} title={info.title} />
               </div>
            ))}
         </div>
      </div>
   );
}