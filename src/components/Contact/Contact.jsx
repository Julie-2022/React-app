import React from "react"
import styles from "./Contact.module.css"
import Products from "../../datas/datas.json"
import { useParams } from "react-router-dom"

export default function Contact() {
  const params = useParams()
  let product = Products.find((product) => params.id === product.id)
  return (
    <div className={styles.contactName}>
      <p>{product.host.name}</p>
      <img
        className={styles.contactHost}
        src={product.host.picture}
        alt="Propriétaire du logement"
      />
    </div>
  )
}
