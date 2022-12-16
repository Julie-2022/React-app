import bannerHome from ".././assets/banner-home.png"
import Meta from "../components/Meta/Meta"
import Banner from ".././components/Banner/Banner"
import Cards from ".././components/Cards/Cards"
import { useLocation } from "react-router-dom"
import styles from "../styles/Home.module.css"

function Home() {
  const metaTitle = "Kasa : location d'appartements entre particuliers"

  const metaDescription =
    "Kasa est une entreprise dans la location d'appartements entre particuliers. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d'appartements entre particuliers en France"

  const location = useLocation()
  console.log(location)

  return (
    <div className={styles.home}>
      <Meta title={metaTitle} description={metaDescription} />
      <main>
        <Banner image={bannerHome} text="Chez vous, partout et ailleurs" />
        <Cards />
      </main>
    </div>
  )
}

export default Home
