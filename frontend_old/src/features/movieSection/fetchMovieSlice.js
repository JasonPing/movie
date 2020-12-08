import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL, TOKEN } from "../../constant/index";

export const fetchMovieSlice = createSlice({
  name: "fetchMovie",
  initialState: {
    data: "",
    fetchMovieLoading: false,
    fetchMovieFailure: false,
  },
  reducers: {
    fetchMovieStart: (state) => {
      state.fetchMovieLoading = true;
    },
    fetchMovieSuccess: (state, action) => {
      state.data = action.payload;
      state.fetchMovieLoading = false;
      state.fetchMovieFailure = false;
    },
    fetchMovieFailure: (state) => {
      state.fetchMovieFailure = true;
      state.fetchMovieLoading = false;
    },
  },
});

export const {
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieFailure,
} = fetchMovieSlice.actions;

// fetch movie api
export const fetchMovie = (name) => async (dispatch) => {
  dispatch(fetchMovieStart());
  let url = `${API_URL}/${name}/movies`;
  let header = {
    headers: {
      Authorization: "Bearer " + TOKEN,
    },
  };

  const res = await axios(url, header).catch((e) => {
    dispatch(fetchMovieFailure());
    throw new Error(e);
  });

  dispatch(fetchMovieSuccess(res.data.data));
  return res.data;
};

export default fetchMovieSlice.reducer;
