import React from 'react';
import styles from './Properties.module.css'
import { getImageUrl } from '../../utils';

export const Properties = () => {
  return (
    <section className={styles.container}>
      <h1>Properties by Area</h1>
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
      <div className={styles.outlook}>
        <div className={styles.innerlook}>
          <img src={getImageUrl("properties/Group.png")} />
          <h3 >Sell your home</h3>
          <h4>We do a free evaluation to be sure you want to start selling.</h4>
          <a href='/'><p>Read more</p></a>
        </div>

        <div className={styles.innerlook}>
          <img src={getImageUrl("properties/Group.png")} />
          <h3>Sell your home</h3>
          <h4>We do a free evaluation to be sure you want to start selling.</h4>
          <a href='/'><p>Read more</p></a>
        </div>

        <div className={styles.innerlook}>
          <img src={getImageUrl("properties/Group.png")} />
          <h3>Sell your home</h3>
          <h4>We do a free evaluation to be sure you want to start selling.</h4>
          <a href='/'><p>Read more</p></a>
        </div>

        <div className={styles.innerlook}>
          <img src={getImageUrl("properties/Group.png")} />
          <h3>Sell your home</h3>
          <h4>We do a free evaluation to be sure you want to start selling.</h4>
          <a href='/'><p>Read more</p></a>
        </div>
      </div>
    </section>
  )
}
