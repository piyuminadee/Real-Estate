import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const imageUrl = getImageUrl("hero/hero.jpeg");
  return (
    <section
      className={styles.container}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.topText}>
        <h1>Find Your Dream Home</h1>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>

      <div className={styles.middlebtn}>
        <button>Rent</button>
        <button>Sale</button>
      </div>

      <div className={styles.searchCntent}>
        <form >
          

          <ul className={styles.menu}>
            <li><label className={styles.drpdwn} htmlFor="locations">Locations</label>

<select name="cars" id="cars">
  <option value="volvo">Select Your City</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select></li>
<li>
<label className={styles.drpdwn} htmlFor="cars">Property Type</label>

            <select name="cars" id="cars">
              <option value="volvo">Select Your Property Type</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
</li>
<li>
<label className={styles.drpdwn} htmlFor="cars">Rent Range</label>

<select name="cars" id="cars">
  <option value="volvo">Select Your Rent Range</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
</li>

<li>
<button className={styles.searchBtn}>Search</button>

</li>
          </ul>
          

        </form>
      </div>
    </section>
  );
};
