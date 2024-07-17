import React from "react";
import styles from "./About.module.css";
import galleryData from "../../gallaryData.jsx";

export const About = (props) => {
  return (
    <section className={styles.container} id="gallery">
      <div className={styles.title}>
        <h2>Properties by Area</h2>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>

      <div className={styles.gallery}>
        {galleryData.map((image) => (
          <div key={image.id} className={styles.cardContainer}>
            <img className={styles.card}
              
              src={`../Gallery/${image.img}`}
              alt={`Img ${image.id}`}
            />
            <div className={styles.cardText}>
            <p>{image.country}</p>
            <p>{image.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
