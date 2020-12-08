import React from "react";

import styles from "./Card.module.css";

export function Card({ data }) {
  return (
    <div className={styles.card} key={data.id}>
      <picture>
        <img src={data.Image} alt={data.Name} />
      </picture>
      <div className={styles.info}>
        <h1>{data.Name}</h1>
        <h3>{data.Genre}</h3>
        <p>{data.Description}</p>

        <p className={styles.margin_top}>
          <b>Release Date: </b>
          {data.ReleaseDate}
        </p>
        <p>
          <b>Running Time: </b>
          {data.RunningTime}
        </p>
        <p>
          <b>Director: </b>
          {data.Director}
        </p>
        <p>
          <b>Cast: </b>
          {data.Cast}
        </p>

        <div className={styles.price}>
          ${data.Price.toFixed(2).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
