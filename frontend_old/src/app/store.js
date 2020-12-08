import { configureStore } from "@reduxjs/toolkit";

import fetchMovieReducer from "../features/movieSection/fetchMovieSlice";

import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    movies: fetchMovieReducer,
  },
  middleware: [thunk],
});
