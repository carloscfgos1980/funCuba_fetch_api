import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const URL_REVIEWS = "http://localhost:8000/v1/reviews";

export type Review = {
  feedId: string;
  type: string;
  rate: number;
  comment: string;
  name: string;
  country: string;
};

type reviewsState = {
  reviews: Review[];
  postSuccessful: boolean;
  searchfield: string;
  loading: boolean;
};

const fetchreviews = async (): Promise</*unresolved*/ any> => {
  try {
    const response = await axios.get(URL_REVIEWS);
    const reviews = response.data;
    console.log('fetch reviews', reviews)
    return { reviews };
  } catch (error) {
    console.error(error);
  }
};

export const getreviewsAsync = createAsyncThunk(
  "reviews/getReviewsAsync",
  fetchreviews,
);

const saveReview = async (review: Review) => {
  try {
    const response = await axios.post(URL_REVIEWS, review);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const saveReviewsAsync = createAsyncThunk(
  "feeds/saveReviewsAsync",
  saveReview,
);

const initialState: reviewsState = {
  reviews: [],
  postSuccessful: false,
  searchfield: "",
  loading: true,
};

export const filteredReviewsSlice = createSlice({
  name: "filteredReviews",
  initialState,
  reducers: {
    filterreviews: (state, action: PayloadAction<string>) => {
      state.searchfield = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getreviewsAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.reviews = action.payload.reviews;
        state.loading = false;
      },
    );
    builder.addCase(saveReviewsAsync.fulfilled, (state) => {
      state.postSuccessful = true;
    });
  },
});

export const { filterreviews } = filteredReviewsSlice.actions;

export default filteredReviewsSlice.reducer;
