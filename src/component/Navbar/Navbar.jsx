import React from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title} title="homepage">
        <img src={getImageUrl("home/home.png")} alt="Home" />
        <h1>REIS</h1>
      </a>
      <div className={styles.menu}>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#ouragents">OUR AGENTS</a>
          </li>
          <li>
            <a href="#aboutus">ABOUT US</a>
          </li>
          <li>
            <a href="#gallery">GALLERY</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a href="#search">SEARCH</a>
          </li>
        </ul>

        <img
           className={`${styles.menubtn} ${styles.smallImage}`}
           
          src={
            menuOpen
              ? getImageUrl("nav/menuclosedark.png")
              : getImageUrl("nav/menudark.png")
          }
          alt="menu icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </nav>
  );
};
