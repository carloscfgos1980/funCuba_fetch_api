import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "../layouts/Pages/Home";
import AirB from "../layouts/Pages/AirB";
import RootLayout from "../layouts/RootLayout";
import ChillOut from "../layouts/Pages/ChillOut";
import TripPlan from "../layouts/Pages/TripPlan";
import Feedback from "../layouts/Pages/Feedback";
import { useAppDispatch } from "../redux/configureStore";
import { useEffect } from "react";
import { getreviewsAsync } from "../redux/filteredReviews";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/airB" element={<AirB />} />
      <Route path="/chill" element={<ChillOut />} />
      <Route path="/trip" element={<TripPlan />} />
      <Route path="/feedback" element={<Feedback />} />
    </Route>,
  ),
);

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getreviewsAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
