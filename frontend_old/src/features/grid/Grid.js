import React, { useState } from "react";
import { Card } from "../card/Card";

import styles from "./Grid.module.css";

import { CSVLink, CSVDownload } from "react-csv";

function convertArrayOfObjectsToCSV(data) {
  let result = [];

  data.map((d) => {
    let temp = [];
    for (const [key, value] of Object.entries(d)) {
      temp.push(value);
    }
    result.push(temp);
  });

  return result;
}

function checkIn24hr(date) {
  var date1 = new Date(date);
  var timeStamp = Math.round(new Date().getTime() / 1000);
  var timeStampYesterday = timeStamp - 24 * 3600;
  var is24 =
    date1 >= new Date(timeStampYesterday * 1000).getTime() &&
    date1 <= new Date(timeStamp * 1000).getTime();

  return is24;
}

export function Grid({ data }) {
  let [movies, setMovies] = useState(data);
  let csvData = [];

  if (movies.length) {
    csvData = convertArrayOfObjectsToCSV(
      movies.filter((m) => checkIn24hr(m.ReleaseDate))
    );
  }

  return (
    <>
      <div className={styles.button_group}>
        <button
          onClick={() => {
            let filtered = movies.reduce((prev, curr) =>
              prev.Price < curr.Price ? prev : curr
            );
            setMovies([filtered]);
          }}
          className={styles.button}
        >
          Get the Cheapest
        </button>
        <button
          onClick={() => {
            setMovies(data);
          }}
          className={styles.button}
        >
          Get All Movies
        </button>
        <CSVLink data={csvData} className={styles.button}>
          Export CSV
        </CSVLink>
      </div>
      <div className={styles.grid}>
        {movies.map((d) => {
          return <Card data={d} key={d.id} />;
        })}
      </div>
    </>
  );
}
