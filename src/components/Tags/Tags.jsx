import React from "react";
import styles from "./Tags.module.css"



const Tags = ({ getTag }) => {
  return (
    <div className={styles.tag}>
      <p>{getTag}</p>
    </div>
  );
};
export default Tags;