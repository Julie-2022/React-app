import React from "react"
import Img from "../../assets/logo.png"
import styles from "./Header.module.css"

//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    //<Router>
    <div className={styles.header}>
      <nav className={styles.nav}>
        <img className={styles.logo} src={Img} alt="logo de Kasa"></img>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </div>
    //   <Switch>
    //     <Route exact path="/Home">
    //       <SectionA />
    //     </Route>
    //   </Switch>
    // </Router>
  )
}
//<a href="./sass/pages/restau-3.html" class="card">
