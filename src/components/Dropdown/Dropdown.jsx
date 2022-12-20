import React, { useState } from "react"
import ArrowTop from "../../assets/arrow-top.svg"
import ArrowBack from "../../assets/arrow-back.svg"
import styles from "./Dropdown.module.css"

export default function DropDown({ txt, title, txtArray }) {
  const [isOpen, setIsOpen] = useState(false)
  return isOpen ? (
    <div>
      <button
        className={styles.dropdownButton}
        type="button"
        onClick={() => setIsOpen(false)}
      >
        <span>{title}</span>
        <img
          src={ArrowTop}
          alt="flèche vers le haut"
          className={styles.arrow}
        />
      </button>
      {txtArray ? (
        <div className={styles.dropdownP}>
          {txtArray.map((text, el) => (
            <p key={el}>{text}</p>
          ))}
        </div>
      ) : (
        <p className={styles.dropdownP}>{txt}</p>
      )}
    </div>
  ) : (
    <button
      className={styles.dropdownButton}
      type="button"
      onClick={() => setIsOpen(true)}
    >
      <span>{title}</span>
      <img src={ArrowBack} alt="flèche vers le bas" className={styles.arrow} />
    </button>
  )
}
