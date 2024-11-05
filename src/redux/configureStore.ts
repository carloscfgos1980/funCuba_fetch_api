import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import filteredReviews from "./filteredReviews";
// import filteredRoutes from "./filteredRoutes";
import filteredTripPlan from "./filteredTripPlan";

export const store = configureStore({
  reducer: {
    filteredReviews,
    // filteredRoutes,
    filteredTripPlan,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
