import React from "react";
import styles from "./PropertiesDes.module.css";
import propertyData from "../../propertyData.jsx";

export const PropertiesDes = (props) => {
  return (
    <section className={styles.container}>
      <h1>Latest Properties of Rent</h1>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Proin sodales ultrices nulla blandit volutpat.
      </p>

      <div className={styles.property}>
        {propertyData.map((propertyItem) => (
          <div key={propertyItem.id} className={styles.cardContainer}>
            <img
              className={styles.card}
              src={`../Property/${propertyItem.img}`}
              alt={`Img ${propertyItem.id}`}
            />
            <div className={styles.cardContent}>
              <h5>{propertyItem.text}</h5>
              <h4>{propertyItem.price}</h4>
              <ul>
                <li>
                  <img
                    className={styles.car}
                    src={`../Property/${propertyItem.icon1}`}
                    alt={propertyItem.car}
                  />
                  <span>4</span>
                </li>
                <li>
                  <img
                    className={styles.bath}
                    src={`../Property/${propertyItem.icon2}`}
                    alt={propertyItem.icon2}
                  />
                  <span>4</span>
                </li>
                <li>
                  <img
                    className={styles.bath}
                    src={`../Property/${propertyItem.arrow}`}
                    alt={propertyItem.arrow}
                  />
                  <span>2,096.00 ft</span>
                </li>
              </ul>
            </div>
            <div className={styles.bottom}>
              <div className={styles.customer}>
                <img
                  className={styles.cus}
                  src={`../Property/${propertyItem.cus}`}
                  alt={propertyItem.cus}
                />
                <p>Jenny Wilson</p>
              </div>
              <div className={styles.cardright}>
                <img
                  className={styles.share}
                  src={`../Property/${propertyItem.share}`}
                  alt={propertyItem.cus}
                />
                <img
                  className={styles.hart}
                  src={`../Property/${propertyItem.hart}`}
                  alt={propertyItem.cus}
                />
                <img
                  className={styles.plusIcon}
                  src={`../Property/${propertyItem.plusIcon}`}
                  alt={propertyItem.cus}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.b}>

      <button className={styles.btn}>Load more listing</button>


      </div>
    </section>
  );
};
