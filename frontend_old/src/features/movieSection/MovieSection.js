import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMovie } from "./fetchMovieSlice";
import { Grid } from "../grid/Grid";

export function MovieSection({ provider, title }) {
  const dispatch = useDispatch();

  let isLoading = useSelector((state) => state.movies.fetchMovieLoading);
  let failure = useSelector((state) => state.movies.fetchMovieFailure);

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchMovie(provider))
      .catch((err) => {
        console.error(err);
      })
      .then((res) => {
        if (res) {
          setData(res.data);
        }
      });
  }, []);

  return (
    <section>
      <h1>{title}</h1>
      {isLoading ? (
        <p>Fetching Movies...</p>
      ) : failure && !data.length ? (
        <p>Fail to retrieve movies</p>
      ) : data.length ? (
        <Grid data={data} />
      ) : (
        <p>No result</p>
      )}
    </section>
  );
}
